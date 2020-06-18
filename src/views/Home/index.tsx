import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PageLoader } from '../../components/PageLoader';
import { PeopleContext } from '../../context/People';
import { PaginationComponent } from '../../components/Pagination';
import { AppContext } from '../../context/App';
import './styles.scss';
import { List } from '../../containers/List';
import { ModalComponent } from '../../components/Modal';

export const Home: React.FC = () => {
  const { people, total, setCurrentPage, currentPage } = useContext(PeopleContext);
  const { appLoading } = useContext(AppContext);
  useEffect(() => {
    console.log('People', people, total);
  }, [people, total]);

  const changePageHandler = async (current: number) => {
    // const item = currentPage < current? people[people.length].id
    setCurrentPage(current);
  };

  if (appLoading) return <PageLoader />;
  return (
    <section className="home-view">
      <header>
        <h1>Home</h1>
      </header>
      <main className="home-list">
        <List cards={people} />
      </main>
      <footer className="home-footer">
        <PaginationComponent
          current={currentPage}
          changePage={changePageHandler}
          totalCount={total}
        />
      </footer>
      <ModalComponent />
    </section>
  );
};
