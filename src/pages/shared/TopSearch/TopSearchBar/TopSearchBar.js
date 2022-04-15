import React from 'react';
import styles from './TopSearchBar.module.css';
import { Button, Container, Grid, Menu, MenuItem } from '@mui/material';
import logo1 from '../../../../assets/image/logo/logo1.png';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const TopSearchBar = () => {

    return (
        <>
            <Container>
                <Grid container className={styles.searchBar}>
                    <Grid item xs={1} >
                        <img src={logo1} alt="logo" className={styles.logo} />
                    </Grid>
                    <Grid container item xs={9.5} className={styles.searchAreaContainer}>
                        <Grid item xs={1.5} className={styles.categorySearchBtn}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Button {...bindTrigger(popupState)}>
                                            All
                                        </Button>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Books</MenuItem>
                                            <MenuItem onClick={popupState.close}>DVD</MenuItem>
                                            <MenuItem onClick={popupState.close}>Audio</MenuItem>
                                            <MenuItem onClick={popupState.close}>
                                                Video
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </Grid>
                        <Grid item xs={8.5}>
                            <input className={styles.searchField} type="text" placeholder='Search title or author on millions of products' />
                        </Grid>
                        <Grid item xs={2} className={styles.searchBtnContainer}>
                            <Button variant='contained' className={styles.searchBtn}>Search</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} className={styles.cartContainer}>
                        <button className={styles.cartBtn}>
                            <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
                            <h6 className={styles.cartText}>Cart</h6>
                        </button>
                    </Grid>
                </Grid>
            </Container>
            <hr />
        </>
    );
};

export default TopSearchBar;