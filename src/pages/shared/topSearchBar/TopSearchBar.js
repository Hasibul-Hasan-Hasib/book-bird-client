import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Container, FormControl, Grid, IconButton, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import logo1 from '../../../assets/image/logo1.png'

const TopSearchBar = () => {



    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={1}>
                        <img style={{ width: '100%' }} src={logo1} alt="logo1" />
                    </Grid>
                    <Grid item container xs={10}>
                        <Grid item xs={1}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={10}>
                            <InputBase
                                placeholder="Search Google Maps"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Grid>
                        <Grid item xs={1}><Button variant='contained'>Search</Button></Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <ShoppingCartIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TopSearchBar;