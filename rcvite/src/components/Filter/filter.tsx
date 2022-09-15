import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from "@mui/material"
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

export const DataFilter: React.FC<{value: string}> = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        
    }

    const handleSearch = (e: any) => {
        
    }

    return (
        <Card sx={{ paddingX: { xs: 2, md: 0 } }}>
                <CardHeader title="filters delivery" />
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
                                value={props.value}
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
    )
}
