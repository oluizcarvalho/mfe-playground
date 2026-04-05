export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar?: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthEvent {
  type: 'login' | 'logout' | 'token-refresh' | 'error' | 'session-expired';
  timestamp: number;
  user?: User;
  error?: string;
}
