import React, { Dispatch, SetStateAction } from "react";
import { PropsWithChildren, useState } from "react";

export interface IFilter {
    value: string;
}
  
const defaultValue: IFilter = {
    value: 'search',
};
  
const defaultUpdate: Dispatch<SetStateAction<IFilter>> = () => defaultValue;

export const FilterContext = React.createContext({
    state: defaultValue,
    update: defaultUpdate,
});

export function  FilterProvider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <FilterContext.Provider value={{ state, update }} {...props} />;
}