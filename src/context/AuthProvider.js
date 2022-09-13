import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initUserData = {};

const userReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "SIGN_IN":
      break;
    case "SIGN_OUT":
      break;
    case "GET_USER":
      break;
    case "UPDATE_USER":
      break;
    default:
      break;
  }
};

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initUserData);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
