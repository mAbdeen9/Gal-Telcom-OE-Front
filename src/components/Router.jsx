import React, { Suspense } from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesLoading from "./Loading/PagesLoading";

const Login = React.lazy(() => import("../pages/Login/Login"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const MyOrders = React.lazy(() => import("../pages/MyOrders/MyOrders"));
const Admin = React.lazy(() => import("../pages/Admin/Admin"));
const Page404 = React.lazy(() => import("../pages/pageNotFound/Page404"));
const AdminControl = React.lazy(() =>
  import("../pages/AdminControl/AdminControlPage")
);
const SearchOrders = React.lazy(() =>
  import("../pages/SearchOrders/SearchOrders")
);

function Router() {
  //
  const { token, role } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Suspense fallback={<PagesLoading />}>
        <Routes>
          {token && !role && <Route path="/home" element={<Home />} />}
          {token && !role && <Route path="/my_orders" element={<MyOrders />} />}
          {token && role && <Route path="/admin_panel" element={<Admin />} />}
          {token && role && <Route path="/search" element={<SearchOrders />} />}
          {token && role && (
            <Route path="/admin_control" element={<AdminControl />} />
          )}
          {token && <Route path="/login" element={<Navigate to="/home" />} />}
          {token && <Route path="*" element={<Page404 />} />}
          {!token && <Route path="*" element={<Navigate to="/login" />} />}
          {!token && <Route path="/login" element={<Login />} />}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
