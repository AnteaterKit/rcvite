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

    const handleSearch = (e: any) => {
        let filtered = e.target.value ? items.filter(x => x.includes(e.target.value)) : items;
        update({value: e.target.value});
        setFilteredData(filtered);
    }

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
            <DataFilter value={state.value}></DataFilter>
        </Grid>
    </Grid>
    )
}
