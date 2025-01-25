import { createContext } from 'react';

interface AuxProps {
  children: React.ReactNode | React.ReactChildren;
}
type AuthInfo = {
  name: string;
};

export const AuthContext = createContext({ name: '' });

const AuthProvider = ({ children }: AuxProps) => {
  const AuthInfo: AuthInfo = {
    name: 'John Doe',
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
