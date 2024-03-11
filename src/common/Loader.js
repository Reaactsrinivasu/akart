import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 20000);
  }, []);

  return (
    <>
      <ScaleLoader color={"black"} loading={loading} size={60} id="spinner" />
    </>
  );
};

export default Loader;
