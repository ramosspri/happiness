import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { MyRoute } from '../../Routes';
import { Grid } from './styles';
import { Modal } from '../Modal';
// import { Container } from './styles';

const Template = () => {
  return (
    <BrowserRouter>
      <Grid>
        <Header />
        <Footer />
        <MyRoute />
      </Grid>
    </BrowserRouter>
    // <Modal />
  );
};

export default Template;
