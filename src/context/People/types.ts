import { IPerson } from '../../interfaces/People';
import { Dispatch, SetStateAction } from 'react';

export interface IPeopleContext {
  people: IPerson[];
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  getPersonInfo: (id: string) => void;
  person: IPerson;
}
