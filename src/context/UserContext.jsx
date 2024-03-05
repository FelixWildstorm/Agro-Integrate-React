import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: '',
    fistName: '',
    lastName: '',
    emailAddress: '',
    permissionsLevel: {
      active: false,
      admin: false,
      superAdmin: false,
    }
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
