import { createContext } from "react";

type MainAppBarContext = {
  user?: User;
  journals?: [Journal];
  desktopNavbarOpened?: boolean;
  mobileNavbarOpened?: boolean;
  toggleDesktopNavbarOpen?: () => void;
  toggleMobileNavbarOpen?: () => void;
};

export const MainAppBarContext = createContext<MainAppBarContext>({});
