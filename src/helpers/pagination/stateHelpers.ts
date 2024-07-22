// stateHelpers.ts
import { Dispatch, SetStateAction } from 'react';

// Define the type for the state
type State = { pageSize: number; pageIndex: number };

// Define the type for the setter function
type SetState = Dispatch<SetStateAction<State>>;

// Function to update page
export const updatePageSize = (setState: SetState) => (pageSize: number) => {
  setState(prevState => ({
    ...prevState,
    pageSize,
  }));
};

// Function to update pageIndex
export const updatePageIndex = (setState: SetState) => (pageIndex: number) => {
  setState(prevState => ({
    ...prevState,
    pageIndex,
  }));
};

