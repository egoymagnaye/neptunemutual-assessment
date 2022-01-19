import React, { useReducer } from "react";

export const AppContext = React.createContext();

// The initial state
const initialState = {
  isModalOpen: false,
  isLoading: false,
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      throw new Error();
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  const toggleModalHandler = async () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const setLoadingHandler = async () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen: appState.isModalOpen,
        isLoading: appState.isLoading,
        toggleModalHandler,
        setLoadingHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
