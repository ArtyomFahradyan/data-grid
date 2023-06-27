import { ReactNode } from "react";

export type Step = {
  id: number;
  info: string;
  message: string;
  type: string;
  component: ReactNode;
  showNext?: boolean;
};
