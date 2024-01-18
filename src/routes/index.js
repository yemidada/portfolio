import { Router, Route, RootRoute } from "@tanstack/react-router";
import { Root } from "./router";
import LandingPage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import WorkPage from "@/pages/WorkPage";
import ResumePage from "@/pages/ResumePage";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});
const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const workRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/works",
  component: WorkPage,
});
const resumeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/resume",
  component: ResumePage,
});

const routeTree = rootRoute.addChildren([indexRoute, contactRoute, workRoute, resumeRoute]);

// Create the router using your route tree
export const router = new Router({
  routeTree,
  defaultPreload: "intent",
});
