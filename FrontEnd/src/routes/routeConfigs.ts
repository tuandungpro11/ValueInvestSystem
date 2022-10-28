import LazyLoading from "../libs/LazyLoading";
export type RouteConfigItem = {
    path: string;
    Element: React.FC
}
const Home = LazyLoading(()=> import("../pages/Home"))

const routeConfigs : RouteConfigItem[]=[
    { path: "/", Element: Home },
]
export default routeConfigs