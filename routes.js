var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-controller text-primary",
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "My team",
    icon: "ni ni-badge text-yellow",
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "League",
    icon: "ni ni-bullet-list-67 text-red",
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Bet on matches",
    icon: "ni ni-pin-3 text-orange",
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    layout: "/auth",
  },
];
export default routes;
