import * as React from 'react';

const initialState = {
  darkMode: false,
  user: null
};
const AppContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});
const appActions = {
  SWITCH_DARK_MODE: 'SWITCH_DARK_MODE',
};
function appReducer(state, action) {
  switch (action.type) {
    case appActions.SWITCH_DARK_MODE: {
      return { ...state, darkMode: !state.darkMode };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}

export { AppProvider, useAppContext, appActions };
