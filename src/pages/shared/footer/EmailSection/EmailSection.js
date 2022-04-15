import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmailSection.module.css'

const EmailSection = () => {
    return (
        <>
            <div className={styles.footerEmailContainer}>
                <h1 className={styles.title}>Join Our mailing list</h1>
                <p className={styles.text}>Be the first to get updates as well as access to exclusive offers and promotions</p>
                <Grid container spacing={2} className={styles.emailAreaContainer}>
                    <Grid item xs={7} md={6} lg={5} ><input type="text" placeholder='Your Email Address' className={styles.textField} /></Grid>
                    <Grid item xs={7} md={2} lg={2} >
                        <Button variant="contained" className={styles.btn}>Sign up</Button>
                    </Grid>
                </Grid>
                <p className={styles.text}>By signing up, you agree to our <Link className={styles.link} to="home">Privacy Policy</Link> and <Link to='/about'>Terms & Conditions</Link></p>
            </div>
        </>
    );
};

export default EmailSection;