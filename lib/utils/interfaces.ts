interface User {
  settings: UserSettings;
}

interface UserSettings {
  darkMode: Boolean;
}

interface LoginFormValues {
  email: string;
  password: string;
}

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
