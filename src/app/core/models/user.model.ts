export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
