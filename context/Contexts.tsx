import { createContext } from "react";

type UserContext = {
  user?: User;
  desktopNavbarOpened?: boolean;
  mobileNavbarOpened?: boolean;
  toggleDesktopNavbarOpen?: () => void;
  toggleMobileNavbarOpen?: () => void;
};

export const UserContext = createContext<UserContext>({});
