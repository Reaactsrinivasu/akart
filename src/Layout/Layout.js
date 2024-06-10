import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SubHeader from './SubHeader';
import Marquee from './Marquee';
const Layout = ({children}) => {
    return (
      <>
        {/* <Marquee /> */}
        <Header />
        <SubHeader />
        <div>{children}</div>
        <Footer />
      </>
    );
};

export default Layout;