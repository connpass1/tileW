"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  count: number;
  path: string | undefined;
};

type ActionType = {
  type: string;
  payload?: string | undefined;
};

const initialState: StateType = {
  count: 0,
  path: "000",
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 ,path:"hhhh"};
    case "DECREMENT":
      return { ...state, count: state.count - 1 ,path:"dddd"};
    case "RESET":
      return { ...state, count: 0 };
    case "PATH":
      return { ...state, path: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
};
