import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from "@mui/material"
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FilterContext } from "../../state/filter.state";

var items: string[] = ['Apple', 'Orange', 'Banana'];

export const Orders: React.FC<{msg: string}> = () => {

    const [allData, setAllData] = useState(items);
    

    const { state, update } = useContext(FilterContext);

    const initData = () =>  {
        let filtered = state.value ? items.filter(x => x.includes(state.value)) : items;
        return filtered
    };

    const [filteredData, setFilteredData] = useState(initData);

    console.log('state', state);

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
            <Card sx={{ paddingX: { xs: 2, md: 0 } }}>
                <CardHeader title="filters" />
                <CardContent sx={{ pt: 0 }}>
                    <Box
                         component="form"
                         sx={{ display: "flex", flexDirection: "column" }}
                         autoComplete="off"
                         onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                                {...register("q")}
                                label="Search"
                                margin="normal"
                                fullWidth
                                autoFocus
                                size="small"
                                value={state.value}
                                onChange={(event) =>handleSearch(event)}
                        >
                        </TextField>
                        <br/>
                        <Button type="submit" variant="contained">
                                start
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} lg={9}>
            <Card sx={{ paddingX: { xs: 2, md: 0 } }}>
                <CardHeader title="data" />
                <CardContent sx={{ pt: 0 }}>
                    <div>{filteredData.map(d => <div key={d}>{d}</div>)}</div>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    )
}
