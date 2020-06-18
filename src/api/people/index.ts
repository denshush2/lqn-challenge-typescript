import { ApolloInstance } from '../../config/apollo';
import { GET_ALL_PEOPLE, GET_PERSON_INFO } from '../queries';
import { IGraphQLResponseError, IGraphQLResponseSuccess } from '../types';
import { IPerson } from '../../interfaces/People';
import { IApiGetPeopleInputs } from './types';

export const foo = 'bard';

//
export const getPeopleAPI = async ({
  after,
  before,
  first,
  last,
}: IApiGetPeopleInputs): Promise<IGraphQLResponseSuccess<'people'> | IGraphQLResponseError> => {
  try {
    const response = await ApolloInstance().query({
      query: GET_ALL_PEOPLE,
      variables: {
        after,
        before,
        first,
        last,
      },
    });
    if (!response.data.allPeople) throw new Error('incorrect fetch');

    console.log(response.data.allPeople);
    return {
      error: false,
      data: {
        pageInfo: {
          endCursor: response.data.allPeople?.pageInfo.endCursor! as string,
          startCursor: response.data.allPeople?.pageInfo.startCursor! as string,
        },
        // Bad Practice to thing that props exist, anyway I don't have too much time to validate all
        totalCount: response.data.allPeople?.totalCount! as number,
        data: response.data.allPeople?.people! as IPerson[],
      },
    };
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message };
    return { error: true, message: 'Error fetching data' };
  }
};

export const getPersonInfoAPI = async (id: string): Promise<IPerson | IGraphQLResponseError> => {
  try {
    const response = await ApolloInstance().query({
      query: GET_PERSON_INFO,
      variables: {
        id,
      },
    });
    return response.data.person as IPerson;
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message };
    return { error: true, message: 'Error fetching data' };
  }
};
