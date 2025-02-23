import { UserRole } from '../../core/models/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    role: UserRole;
    // ... other user properties
  } | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null
};
