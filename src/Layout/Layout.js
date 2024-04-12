import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SubHeader from './SubHeader';
const Layout = ({children}) => {
    return (
      <>
        <Header />
        <SubHeader />
        <div>{children}</div>
        <Footer />
      </>
    );
};

export default Layout;