import { createContext, useContext } from 'react';

const UserContext = createContext<string>('Guest');

export const UserContextExample = () => {
  return (
    <UserContext.Provider value="Marko">
        <Child />
    </UserContext.Provider>
  );
};

const Child = () => {
  const user = useContext(UserContext);
  return <div>Current User: {user}</div>;
};