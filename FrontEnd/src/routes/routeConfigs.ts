import LazyLoading from "../libs/LazyLoading";
export type RouteConfigItem = {
    path: string;
    Element: React.FC
}
const Home = LazyLoading(()=> import("../pages/Home"))
const ConCern = LazyLoading(()=> import("../pages/DoanhNghiep"))
const Branch = LazyLoading(()=> import("../pages/Nganh"))

const routeConfigs : RouteConfigItem[]=[
    { path: "/", Element: Home },
    { path: "/home", Element: Home },
    { path: "/doanhnghiep", Element: ConCern },
    { path: "/nganh", Element: Branch },
]
export default routeConfigs