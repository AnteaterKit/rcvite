import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useReducer, useState } from "react";

export interface User {
    name: string;
    avatarPath: string;
}

export interface WhiteBoardState {
    loading: boolean,
    users: Array<User>
}

const defalutState: WhiteBoardState = {
    loading: true,
    users: new Array<User>()
};

/*
const userUpdate: Dispatch<SetStateAction<User[]>> = () => defalutState;

export const UserContext = React.createContext({state: defalutState, update: userUpdate});

export function UsersProvider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defalutState);
    return <UserContext.Provider value={{ state, update }} {...props} />;
}
*/

export type Action = {type: 'loading'} | {type: 'load'} | {type: 'loaded'}

export type WbDispatch = (action: Action) => void;

const d = (): Action => {
    return { type: 'loading'};
  };

const initialState = {};
const WhiteBoardStore = createContext(initialState);

// https://stackblitz.com/edit/reactjs-usecontext-usereducer-state-management?file=src%2FStore.js
// https://dev.to/devsmitra/3-steps-to-create-custom-state-management-library-with-react-hooks-and-context-api-1bfh
// https://blog.logrocket.com/react-hooks-context-redux-state-management/

//export const reducer = (state, action) => {
//};

function whiteboardReducer(state: WhiteBoardState, action: Action) {
    switch (action.type) {
      case 'load':
        return {  ...state,  loading: true }
      case 'loaded': {
        return { loading: false, users: [
            {
                name: 'Hello',
                avatarPath: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=' 
            },
            {
                name: 'Ava',
                avatarPath: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg'
            }
        ] };
      }
      default: {
        throw new Error(`Unhandled action type: ${action}`)
      }
    }
  }

const WhiteboardStateProvider = ( ) => {
    const [state, dispatch]  = useReducer(whiteboardReducer, defalutState);
    return <WhiteBoardStore.Provider value={{ state, dispatch }}></WhiteBoardStore.Provider>;
};

function useLoad() {
    const context = React.useContext(WhiteBoardStore)
    if (context === undefined) {
      throw new Error('useCount must be used within a WhiteBoardStore')
    }
    return context
}

export { WhiteBoardStore, WhiteboardStateProvider };

