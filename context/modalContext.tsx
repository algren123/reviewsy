import React from "react";

type Dispatch = (action: Action) => void;
type State = { showModal: boolean };
type Action = { type: "show" } | { type: "hide" };
type CountProviderProps = { children: React.ReactNode };

const ModalContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function modalReducer(state: State, action: Action) {
  switch (action.type) {
    case "show": {
      return { showModal: true };
    }
    case "hide": {
      return { showModal: false };
    }
  }
}

function ModalProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(modalReducer, {
    showModal: false,
  });

  const value = { state, dispatch };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModal };
