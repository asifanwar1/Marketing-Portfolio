import { createContext, useContext, useReducer } from 'react';

const DarkModeContext = createContext();

const initialState = {
  darkMode: true,
};

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
