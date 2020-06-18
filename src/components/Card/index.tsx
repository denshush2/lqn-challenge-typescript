import React, { useRef, useContext } from 'react';
import { Card, Button } from 'antd';
import { ICardInputs } from './types';
import './styles.scss';
import { PeopleContext } from '../../context/People';

export const CardComponent: React.FC<ICardInputs> = ({ person }: ICardInputs) => {
  const { getPersonInfo } = useContext(PeopleContext);

  const handleClick = () => getPersonInfo(person.id);
  return (
    <Card className="card" title={person.name} bordered={true}>
      <p>Birth year: {person.birthYear}</p>
      {/*https://github.com/ant-design/ant-design/issues/22493*/}
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        View more
      </Button>
    </Card>
  );
};
