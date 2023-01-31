import { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AddUserContainer from "./Modules/AddUser";
import DisplayUsers from "./Modules/DisplayUsers";
import UpdateUser from "./Modules/UpdateUser";

import { ROUTES } from "./constants";

const routes = [
  {
    path: ROUTES.HOME,
    component: DisplayUsers,
  },
  {
    path: ROUTES.ADD_USER,
    component: AddUserContainer,
  },
  {
    path: ROUTES.EDIT_USER,
    component: UpdateUser,
  },
];

const RouteComponent = (): ReactElement => {
  return (
    <Router>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
