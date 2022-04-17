import React from 'react';
import styles from './SmallSearchBar.module.css'
import { Grid } from '@mantine/core';
import { Menu2, Search, ShoppingCart, Login } from 'tabler-icons-react';
import logo from '../../../../assets/image/logo/logo1.png'

const SmallSearchBar = () => {
    return (
        <>
            <Grid columns={12} container className={styles.searchBarContainer}>
                <Grid.Col span={2} ><Menu2 size={28} /></Grid.Col>
                <Grid.Col span={2} ><Search size={28} /></Grid.Col>
                <Grid.Col span={4}>
                    <img className={styles.logo} src={logo} alt="" />
                </Grid.Col>
                <Grid.Col span={2} ><ShoppingCart size={28} /></Grid.Col>
                <Grid.Col span={2} ><Login size={28} /></Grid.Col>
            </Grid>
        </>
    );
};

export default SmallSearchBar;