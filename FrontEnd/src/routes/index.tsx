import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import routeConfigs, { RouteConfigItem } from "./routeConfigs";
import DefaultLayout from "../layout/DefaultLayout";
import NotFound from "../components/widgets/404";

function RouterApp() {
  const token: boolean = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {routeConfigs.map(({ path, Element }: RouteConfigItem, index: number) => (
        <Route
          key={index}
          path={path}
          element={
            token ? (
              <DefaultLayout>
                <Element />
              </DefaultLayout>
            ) : (
              <Login />
            )
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterApp;
