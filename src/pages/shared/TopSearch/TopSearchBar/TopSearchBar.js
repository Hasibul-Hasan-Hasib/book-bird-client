import React, { useState } from 'react';
import styles from './TopSearchBar.module.css';
import { Button, Container, Grid, Drawer, Select, TextInput, Badge } from '@mantine/core';
import logo1 from '../../../../assets/image/logo/logo1.png';
import { ShoppingCart } from 'tabler-icons-react';
import SideCart from '../SideCart/SideCart';
import { CartState } from '../../../../contexts/CartContext';

const TopSearchBar = () => {

    const {
        state: { cart }
    } = CartState();


    const [opened, setOpened] = useState(false);


    return (
        <>
            <Container size="lg">
                <Grid columns={24} className={styles.searchBar}>
                    <Grid.Col span={3} >
                        <a href='/'><img src={logo1} alt="logo" className={styles.logo} /></a>
                    </Grid.Col>

                    {/* Search Fie */}

                    <Grid.Col span={20} className={styles.searchAreaContainer}>
                        <Grid.Col span={4} >
                            <Select
                                defaultValue="All"
                                defaultlabel="All"
                                data={[
                                    { value: 'All', label: 'All' },
                                    { value: 'Books', label: 'Books' },
                                    { value: 'Rare Books', label: 'Rare Books' },
                                    { value: 'DVD & Blue-Ray', label: 'DVD & Blue-Ray' },
                                    { value: 'Music', label: 'Music' },
                                    { value: 'Videos', label: 'Videos' },
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={17}>
                            <TextInput
                                placeholder="Search the book you need"
                            />
                        </Grid.Col>
                        <Grid.Col span={4} className={styles.searchBtnContainer}>
                            <Button>Search</Button>
                        </Grid.Col>
                    </Grid.Col>

                    {/* Cart Btn */}

                    <Grid.Col span={1} className={styles.cartContainer}>
                        
                        {
                            cart.length > 0 ? (<Badge
                                style={{ zIndex: '1', marginBottom: '-0.5rem', marginLeft: '2.5rem' }}
                                variant="gradient" gradient={{ from: 'orange', to: 'red' }}
                            >{cart.length}</Badge>) : ("")
                        }

                        <Drawer
                            opened={opened}
                            onClose={() => setOpened(false)}
                            padding="xl"
                            size="xxl"
                            position="right"
                        >
                            <SideCart />
                        </Drawer>

                        <div position="right">
                            <button
                                className={styles.cartBtn}
                                onClick={() => setOpened(true)}
                            >
                                <ShoppingCart size={28} />
                                <h6 className={styles.cartText}>Cart</h6>
                            </button>
                        </div>

                    </Grid.Col>
                </Grid>
            </Container>
            <hr />
        </>
    );
};

export default TopSearchBar;