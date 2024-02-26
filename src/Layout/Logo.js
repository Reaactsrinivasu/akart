import React from 'react';
const NavLogo = "assets/imgs/logo.png";


const Logo = (props) => {
  return (
    <>
      <img
        src={NavLogo}
        alt="Logo"
        style={{ marginRight: "16px", height: "48px" }}
      />
    </>
  );
}

export default Logo