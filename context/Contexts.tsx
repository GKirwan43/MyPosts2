import { createContext } from "react";

type MainAppBarContext = {
  user: User | undefined;
  journals: [Journal] | undefined;
  desktopNavbarOpened: boolean;
  mobileNavbarOpened: boolean;
  toggleDesktopNavbarOpen: () => void;
  toggleMobileNavbarOpen: () => void;
};

export const MainAppBarContext = createContext<MainAppBarContext>({
  user: undefined,
  journals: undefined,
  desktopNavbarOpened: false,
  mobileNavbarOpened: false,
  toggleDesktopNavbarOpen: () => {},
  toggleMobileNavbarOpen: () => {},
});
