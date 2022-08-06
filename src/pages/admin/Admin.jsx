import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import Header from "../../components/Header/Header";

// import classes from "./Admin.module.css";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <AdminPanel></AdminPanel>
    </Fragment>
  );
}

export default Admin;
