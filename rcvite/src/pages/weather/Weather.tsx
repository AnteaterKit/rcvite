import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext } from "react";
import { Userlist } from "../../components/Whiteboard/userlist"
import { Userbar } from "../../components/Whiteboard/usersbar"
import { Cities, WeatherContext } from "../../state/weather/WeatherState";
import { WhiteBoardStore } from "../../state/whiteboard.state";

function getCityName(city: Cities) {
    switch(city) {
        case Cities.Moscow:
            return 'Moscow';
        case Cities.SPB:
            return 'SPB';
        default: return '';
    }
}

export const Weather: React.FC<{msg: string}> = () => {
    const { state, dispatch } = useContext(WeatherContext);
    console.log('state');
    const handleChange = (event: SelectChangeEvent) => {
       console.log(event.target.value);
        dispatch({type: 'SET_CITY', payload: event.target.value});
    };
    
    const menuItems = state.cities.map((x) => (
        <MenuItem key={x} value={x}>{getCityName(x) }, {x}</MenuItem>
    ));

    return (
        <div>
            Weather in { getCityName(state.defaultCity) }
            <Select
                value={state.defaultCity.toString()}
                label="Age"
                onChange={handleChange}
            >
                {menuItems}
            </Select>
            { 
                state.items.map((item) => (<li>{item.degrees}</li>))
            }
          
        </div>
    )
}