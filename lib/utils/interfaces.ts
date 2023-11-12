interface User {
  settings: UserSettings;
}

interface UserSettings {
  darkMode: Boolean;
}

interface Journal {
  uid: string;
  id: string;
  title: string;
  description: string;
}

interface JournalPost {
  title: string;
  post: string;
  createAt: Date;
  updatedAt: Date;
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
