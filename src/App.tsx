import React, { ReactElement } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Layout from './Layout/Layout';
import Main from './Layout/Main';
import Routes from './Router/Routes';

function App(): ReactElement {
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <Routes />
        </Main>

        <Footer />
      </Layout>

    </>
  );
}

export default App;
