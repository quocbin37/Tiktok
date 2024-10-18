//Layout
import OnlyHeaderLayout from "~/components/Layout/OnlyHeaderLayout";

// Pages
import Home from "~/page/Home";
import Following from "~/page/Following";
import Upload from "~/page/Upload";
import Profile from "~/page/Profile";
import Search from "~/page/Search";
//import routes config
import routesConfig from "~/config/routes"

// Public Roites

const publicRoutes = [
  { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: OnlyHeaderLayout },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
