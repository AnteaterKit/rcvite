import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
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
    const { state: { cities, defaultCity }, dispatch } = useContext(WeatherContext);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch({type: 'SET_CITY', payload: event.target.value});
    };

    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = 12.9699;
    let long = 77.5980;
    let exclude = 'hourly,minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
    
    const fetchData = ()=>{
        axios(ULR).then((data)=>{
            const items = data.data.daily
            dispatch({
                type:'SET_DAYS',
                payload: items
            })
        })
    }

    // https://dmitripavlutin.com/react-useeffect-infinite-loop/
    useEffect(()=> {
        fetchData();
     }, [cities, defaultCity]);
    
    const menuItems = cities.map((x) => (
        <MenuItem key={x} value={x}>{getCityName(x) }, {x}</MenuItem>
    ));

    return (
        <div>
            Weather in { getCityName(defaultCity) }
            <Select
                value={defaultCity.toString()}
                label="Age"
                onChange={handleChange}
            >
                {menuItems}
            </Select>
       
          
        </div>
    )
}