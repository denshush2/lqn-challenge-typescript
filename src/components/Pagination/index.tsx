import React from 'react';
import { IPaginationComponentInputs } from './types';
import { Pagination } from 'antd';

// eslint-disable-next-line react/prop-types
export const PaginationComponent: React.FC<IPaginationComponentInputs> = ({
  totalCount,
  changePage,
  current,
}: IPaginationComponentInputs) => (
  <Pagination
    defaultCurrent={1}
    current={current}
    onChange={(page) => changePage(page)}
    total={totalCount}
  />
);
