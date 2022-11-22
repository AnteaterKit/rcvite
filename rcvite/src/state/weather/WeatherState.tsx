// https://www.linkedin.com/pulse/react-weather-app-context-axios-usereducer-usecontext-rohit-azad

import React, { Dispatch, PropsWithChildren, useReducer } from "react";
import { WeatherReducer } from "./WeatherReducer";

export interface WeatherDay {
    dayNamber: number;
    degrees: number;
}

export enum Cities {
    SPB,
    Moscow
}

export interface WeatherState {
    defaultCity: Cities,
    cities: Cities[],
    items: Array<WeatherDay>
}

export type Action = 'SET_CITY' | 'SET_DAYS';

type ConxtextState = {
    state: WeatherState,
    dispatch: Dispatch<any>
}

const defalutState: WeatherState  = {
  defaultCity: Cities.Moscow,
  cities: [Cities.Moscow, Cities.SPB],
  items: new Array<WeatherDay>()
}

const defaultDispatch: Dispatch<any> = () => defalutState;

const initialState = { 
    state: defalutState,
    dispatch: defaultDispatch
} as ConxtextState;

const WeatherContext = React.createContext(initialState);

const WeatherProvider = ({children}: PropsWithChildren) => {
    const [state, dispatch]  = useReducer(WeatherReducer, defalutState);
    return <WeatherContext.Provider value={{ state, dispatch }}>
         {children}
    </WeatherContext.Provider>;
};

export { WeatherContext, WeatherProvider };