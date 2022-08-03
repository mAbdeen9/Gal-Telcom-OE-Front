import React from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Page404 from "../pages/pageNotFound/Page404";
import { useSelector } from "react-redux";
import MyOrders from "../pages/MyOrders/MyOrders";

function Router() {
  //
  const token = useSelector((state) => state.auth.token);

  return (
    <Fragment>
      <Routes>
        {token && <Route path="/home" element={<Home />} />}
        {token && <Route path="/login" element={<Navigate to="/home" />} />}
        {token && <Route path="/my-orders" element={<MyOrders />} />}
        {token && <Route path="*" element={<Page404 />} />}
        {!token && <Route path="*" element={<Navigate to="/login" />} />}
        {!token && <Route path="/login" element={<Login />} />}
      </Routes>
    </Fragment>
  );
}

export default Router;
