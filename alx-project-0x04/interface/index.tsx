import { ReactNode } from "raect";

interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

interface LayoutProps {
  children: ReactNode;
}

interface PageRouteProps {
  pageRoute: string
}
