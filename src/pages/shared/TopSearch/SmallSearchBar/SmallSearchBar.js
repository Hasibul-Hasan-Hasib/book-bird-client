import React from 'react';
import styles from './SmallSearchBar.module.css'
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../../../../assets/image/logo/logo1.png'

const SmallSearchBar = () => {
    return (
        <>
            <Grid container className={styles.searchBarContainer}>
                <Grid item xs={2} ><MenuIcon sx={{fontSize:"2.3rem"}} /></Grid>
                <Grid item xs={2} ><SearchIcon sx={{fontSize:"2.3rem"}} /></Grid>
                <Grid item xs={4}>
                    <img className={styles.logo} src={logo} alt="" />
                </Grid>
                <Grid item xs={2} ><ShoppingCartIcon sx={{fontSize:"2.3rem"}} /></Grid>
                <Grid item xs={2} ><PersonOutlineIcon sx={{fontSize:"2.3rem"}}/></Grid>
            </Grid>
        </>
    );
};

export default SmallSearchBar;