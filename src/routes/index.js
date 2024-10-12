//Layout
import OnlyHeaderLayout from "~/components/Layout/OnlyHeaderLayout";

// Pages
import Home from "~/page/Home";
import Following from "~/page/Following";
import Upload from "~/page/Upload";
import Profile from "~/page/Profile";
import Search from "~/page/Search";
// Public Roites
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: OnlyHeaderLayout,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
