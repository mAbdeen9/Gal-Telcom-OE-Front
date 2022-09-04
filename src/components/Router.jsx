import React, { Suspense } from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesLoading from "./Loading/PagesLoading";

const Login = React.lazy(() => import("../pages/Login/Login"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const MyOrders = React.lazy(() => import("../pages/MyOrders/MyOrders"));
const Admin = React.lazy(() => import("../pages/Admin/Admin"));
const AdminControl = React.lazy(() =>
  import("../pages/AdminControl/AdminControlPage")
);
const SearchOrders = React.lazy(() =>
  import("../pages/SearchOrders/SearchOrders")
);

function Router() {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Suspense fallback={<PagesLoading />}>
        <Routes>
          {token && role === "user" && (
            <Route path="/home" element={<Home />} />
          )}
          {token && role === "user" && (
            <Route path="/my-orders" element={<MyOrders />} />
          )}
          {token && role === "admin" && (
            <Route path="/admin_panel" element={<Admin />} />
          )}
          {token && role === "admin" && (
            <Route path="/search" element={<SearchOrders />} />
          )}
          {token && role === "admin" && (
            <Route path="/admin_control" element={<AdminControl />} />
          )}

          {<Route path="/login" element={<Login />} />}
          {<Route path="*" element={<Login />} />}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
