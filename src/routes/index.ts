import { lazy } from "react";
import { Pages, Routes } from "./types";

export enum Path {
  Welcome = "/",
  AuthCallback = "/oauth/callback",
  ApproveCallback = "/approve-callback",
}

const routes: Routes = {
  [Pages.Welcome]: {
    component: lazy(() => import("pages/LandingPage")),
    path: Path.Welcome,
    title: "Welcome",
  },
  [Pages.AuthCallback]: {
    component: lazy(() => import("pages/AuthCallback")),
    path: Path.AuthCallback,
  },
  [Pages.ApproveCallback]: {
    component: lazy(() => import("pages/ApproveCallback")),
    path: Path.ApproveCallback,
  },
};

export default routes;
