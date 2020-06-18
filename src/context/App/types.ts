import { Dispatch, SetStateAction } from 'react';
import { IPlanet } from '../../interfaces/Planet';
import { IFilm } from '../../interfaces/Film';

export interface IAppContext {
  appLoading: boolean;
  setAppLoading: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  openModal: () => void;
  modalContent: IModalContent;
  setModalContent: Dispatch<SetStateAction<IModalContent>>;
}

export interface IModalContent {
  title: string;
  planets: IPlanet[];
  films: IFilm[];
}
