import { ReactElement, ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackComponent?: ReactElement;
}
