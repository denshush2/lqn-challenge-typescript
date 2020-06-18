import React, { createContext, useState, useContext, useEffect } from 'react';

import { IPeopleContext } from './types';
import { getPeopleAPI, getPersonInfoAPI } from '../../api/people';
import { IPerson } from '../../interfaces/People';
import { AppContext } from '../App';

export const PeopleContext = createContext<IPeopleContext>({
  people: [],
  total: 0,
  setCurrentPage: () => null,
  currentPage: 0,
  getPersonInfo: () => null,
  person: { birthYear: '', id: '', name: '', error: false },
});

// eslint-disable-next-line react/prop-types
export const PeopleProvider: React.FC = ({ children }) => {
  const { setAppLoading, setModalContent, openModal } = useContext(AppContext);
  const [people, setPeople] = useState<IPerson[]>([]);
  const [person, setPerson] = useState<IPerson>({ birthYear: '', id: '', name: '', error: false });
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<number>(1);
  const [cursor, setCursor] = useState<{ endCursor: string; startCursor: string }>({
    endCursor: '',
    startCursor: '',
  });

  useEffect(() => {
    const getPeople = async () => {
      const isBinarySearch = { is: false, start: false };
      try {
        setAppLoading(true);
        let queryParams = {};
        if (prevPage + 1 === currentPage || prevPage + 1 === currentPage + 2) {
          console.log(currentPage, prevPage);
          queryParams =
            currentPage > prevPage
              ? { first: 10, after: cursor.endCursor }
              : { last: 10, before: cursor.startCursor };
        } else if (prevPage !== currentPage) {
          isBinarySearch.is = true;
          console.log(
            'ISE',
            parseInt(('' + total)[0], 10) / 2 >= currentPage
              ? currentPage * 10
              : (parseInt(('' + total)[0], 10) - currentPage) * 10 + (total % 10) + 10
          );
          isBinarySearch.start = parseInt(('' + total)[0], 10) / 2 >= currentPage;
          console.log('BINARY', isBinarySearch.start);
          queryParams = isBinarySearch.start
            ? { first: currentPage * 10 }
            : { last: (parseInt(('' + total)[0], 10) - currentPage) * 10 + (total % 10) + 10 };
        } else {
          queryParams = { first: 10 };
        }

        const response = await getPeopleAPI({ ...queryParams });

        if (response.error === true) throw new Error('errror fetching data');

        if (isBinarySearch.is) {
          console.log(response.data.data.length);
          response.data.data = !isBinarySearch.start
            ? response.data.data.slice(0, 10)
            : response.data.data.slice(Math.max(response.data.data.length - 10, 1));
        }
        console.log('Cursors', response.data.pageInfo);
        setCursor({
          endCursor: response.data.pageInfo.endCursor,
          startCursor: response.data.pageInfo.startCursor,
        });
        setPeople([...response.data.data]);
        setTotal(response.data.totalCount);
        setAppLoading(false);
        setPrevPage(currentPage);
      } catch (e) {
        console.log(e);
        setAppLoading(false);
      }
    };
    getPeople();
  }, [currentPage]);

  const getPersonInfo = async (id: string) => {
    try {
      const response = await getPersonInfoAPI(id);
      if (response.error === true) throw new Error('Error fetching data');
      console.log('Response!');
      setModalContent({
        title: response.name,
        planets: [],
        films: response.filmConnection!.films!,
      });
      openModal();
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <PeopleContext.Provider
      value={{ people, person, currentPage, getPersonInfo, setCurrentPage, total }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
