import React from 'react';
import { IListInputs } from './types';
import { CardComponent } from '../../components/Card';
import './styles.scss';

export const List: React.FC<IListInputs> = ({ cards }: IListInputs) => {
  return (
    <div className="list-area">
      {cards.map((card) => (
        <CardComponent key={card.id} person={card} />
      ))}
    </div>
  );
};
