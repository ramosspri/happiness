import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { MyRoute } from '../../Routes';
import { Grid } from './styles';
import { Modal } from '../Modal';
import { SideMenu } from '../SideMenu';
import { useCreateContext } from '../../context/UsersContext';

const Template = () => {
  const { mostra } = useCreateContext();

  return (
    <>
      <BrowserRouter>
        <Grid>
          <Header />
          <SideMenu mostra="hide1" />
          <MyRoute />
          <Footer />
        </Grid>
      </BrowserRouter>
      {mostra && <Modal />}
    </>
  );
};

export default Template;
