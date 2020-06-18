import { IGraphqlQLResponse, GraphqlResponseList } from '../interfaces/GraphqlResponse';

export interface IGraphQLResponseSuccess<T extends keyof GraphqlResponseList> {
  error: false;
  data: IGraphqlQLResponse<T>;
}
export interface IGraphQLResponseError {
  error: true;
  message: string;
}
