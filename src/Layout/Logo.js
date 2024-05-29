import React from 'react';
import { useNavigate } from "react-router-dom";
// const NavLogo = "assets/imgs/actimizeLogo.png";

const Logo = (props) => {
    const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate("/")}
        // src={NavLogo}
        src="/assets/imgs/actimizeLogo.png"
        alt="Logo"
        style={{ marginRight: "16px", height: "48px", cursor: "pointer" }}
      />
    </>
  );
}

export default Logo