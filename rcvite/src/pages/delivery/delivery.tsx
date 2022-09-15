import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from "@mui/material"
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { DataFilter } from "../../components/Filter/filter";
import { FilterContext } from "../../state/filter.state";

var items: string[] = ['Apple', 'Orange', 'Banana'];

export const Delivery: React.FC<{msg: string}> = () => {

    const [allData, setAllData] = useState(items);
    const [filteredData, setFilteredData] = useState(allData);

    const { state, update } = useContext(FilterContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        let filtered = data.q ? items.filter(x => x.includes(data.q)) : items;
        setFilteredData(filtered);
    }

    const handleSearch = (value: any): void => {
        let filtered = value ? items.filter(x => x.includes(value)) : items;
        update({value: value});
        setFilteredData(filtered);
    }

    const dataFilter = { value: state.value, onSearch: handleSearch };

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
            <DataFilter 
                { ... dataFilter }
            >
            </DataFilter>
        </Grid>
    </Grid>
    )
}
