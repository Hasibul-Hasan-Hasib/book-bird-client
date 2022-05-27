import React, { useState } from 'react';
import styles from './SmallSearchBar.module.css'
import { Search, ShoppingCart, User } from 'tabler-icons-react';
import logo from '../../../../assets/image/logo/logo1.png'
import { Burger, Grid, Menu } from '@mantine/core';
import { Link } from 'react-router-dom'

const SmallSearchBar = () => {

    const [opened, setOpened] = useState(false);


    return (
        <>
            <Grid columns={12} container className={styles.searchBarContainer}>
                <Grid.Col span={2} >
                    <Menu
                        control={
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                            />
                        }
                    >
                        <Menu.Label >Application</Menu.Label>
                        <Menu.Item onClick={() => setOpened((o) => !o)}>Settings</Menu.Item>
                        <Menu.Item onClick={() => setOpened((o) => !o)}>Messages</Menu.Item>
                        <Menu.Item onClick={() => setOpened((o) => !o)}>Gallery</Menu.Item>
                    </Menu>

                </Grid.Col>
                <Grid.Col span={2} ><Link to="/"><Search size={28} color="black"/></Link></Grid.Col>
                <Grid.Col span={4}>
                    <img className={styles.logo} src={logo} alt="" />
                </Grid.Col>
                <Grid.Col span={2} ><Link to="/cart"><ShoppingCart size={28} color="black"/></Link></Grid.Col>
                <Grid.Col span={2} ><User size={28} /></Grid.Col>
            </Grid>
        </>
    );
};

export default SmallSearchBar;