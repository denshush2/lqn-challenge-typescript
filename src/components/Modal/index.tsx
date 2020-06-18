import React, { useContext } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { AppContext } from '../../context/App';
import { Divider } from 'antd';
import { link } from 'fs';

export const ModalComponent: React.FC = () => {
  const { isModalOpen, openModal, modalContent } = useContext(AppContext);
  return (
    <Modal
      title={modalContent.title}
      visible={isModalOpen}
      onOk={() => openModal()}
      onCancel={() => openModal()}
    >
      <b>Films</b>
      {modalContent.films.map((film) => (
        <>
          <p key={film.id}>
            <b>Title:</b>
            {film.title}
          </p>
          <p key={film.id}>
            <b>director:</b>
            {film.director}
          </p>
          <p>
            <b>Planets:</b>
            <ul>
              {film.planetConnection.planets?.map((planet) => (
                <li>{planet.name}</li>
              ))}
            </ul>
          </p>
          {console.log(film)}
          <Divider />
        </>
      ))}
    </Modal>
  );
};
