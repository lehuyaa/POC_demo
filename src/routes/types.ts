import { FC } from "react";
import { PathRouteProps } from "react-router-dom";

enum Pages {
  Welcome,
  AuthCallback,
  ApproveCallback,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: any;
  privateRoute?: boolean;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
