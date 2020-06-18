import React, { createContext, useState } from 'react';

import { IAppContext, IModalContent } from './types';

export const AppContext = createContext<IAppContext>({
  appLoading: true,
  setAppLoading: () => true,
  isModalOpen: false,
  openModal: () => null,
  setModalContent: () => null,
  modalContent: { planets: [], title: '', films: [] },
});

// eslint-disable-next-line react/prop-types
export const AppProvider: React.FC = ({ children }) => {
  const [appLoading, setAppLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<IModalContent>({
    planets: [],
    title: '',
    films: [],
  });
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <AppContext.Provider
      value={{ appLoading, setAppLoading, isModalOpen, openModal, setModalContent, modalContent }}
    >
      {children}
    </AppContext.Provider>
  );
};
