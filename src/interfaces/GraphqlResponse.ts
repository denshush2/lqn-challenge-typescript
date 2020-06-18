import { IPerson } from './People';
import { IFilm } from './Film';
import { IPlanet } from './Planet';

export type GraphqlResponseList = {
  people: IPerson;
  film: IFilm;
  planet: IPlanet;
};

export interface IPageInfo {
  startCursor: string;
  endCursor: string;
}

export interface IGraphqlQLResponse<T extends keyof GraphqlResponseList> {
  totalCount: number;
  pageInfo: IPageInfo;
  data: GraphqlResponseList[T][];
  films?: GraphqlResponseList[T][];
  planets?: GraphqlResponseList[T][];
}

// const peoples = (): IGraphqlQLResponse<'people'> => {
//   return {
//     totalCount: 12,
//     data: [
//       {
//         birthYear: 'asdasd',
//       },
//     ],
//   };
// };
// const films = (): IGraphqlQLResponse<'film'> => {
//   return {
//     totalCount: 12,
//     data: [
//       {
//         id: 'asdasd',
//       },
//     ],
//   };
// };
