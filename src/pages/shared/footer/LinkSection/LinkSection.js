import React from 'react';
import styles from './LinkSection.module.css'
import Logo from '../../../../assets/image/logo/logo1.png'
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const LinkSection = () => {
    return (
        <>
            <div className={styles.background}>
                <Container className={styles.firstSectionContainer}>
                    <img className={styles.logo} src={Logo} alt="" />
                    <h4 className={styles.text}>BookBird sells used books online to over 190 countries worldwide.</h4>
                    <h4 className={styles.text}>You can connect with us on Facebook, Twitter, Instagram, or through our Blog.</h4>
                </Container>
                <hr />
                <Container>
                    <Grid container className={styles.secondSectionContainer}>
                        <Grid item xs={12} md={2.4} className={styles.linksContainer}>
                            <img className={styles.footerLogo1} src="https://images.ctfassets.net/fxjn30k1sseo/58W9GIL8zcgVoQaxwjo2l3/753fb3f953b92d55039baf4cf9197000/footer-queens-award_140.png" alt="" />
                        </Grid>
                        <Grid item xs={12} md={2.4} className={styles.linksContainer}>
                            <h4 className={styles.linkTitle}>World of Books</h4>
                            <Link className={styles.link} to="/">About Us</Link>
                            <Link className={styles.link} to="/">Top Authors</Link>
                            <Link className={styles.link} to="/">Blog</Link>
                            <Link className={styles.link} to="/">Facebook</Link>
                            <Link className={styles.link} to="/">Twitter</Link>
                            <Link className={styles.link} to="/">Instagram</Link>
                            <Link className={styles.link} to="/">Wholesale Books</Link>
                            <Link className={styles.link} to="/">Careers</Link>
                        </Grid>
                        <Grid item xs={12} md={2.4} className={styles.linksContainer}>
                            <h4 className={styles.linkTitle}>Help</h4>
                            <Link className={styles.link} to="/">Frequently Asked Question</Link>
                            <Link className={styles.link} to="/">Talk to W</Link>
                            <Link className={styles.link} to="/">Shipping Information</Link>
                            <Link className={styles.link} to="/">Conditional Guide</Link>
                            <Link className={styles.link} to="/">Cookies</Link>
                        </Grid>
                        <Grid item xs={12} md={2.4} className={styles.linksContainer}>
                            <h4 className={styles.linkTitle}>Rare Books</h4>
                            <Link className={styles.link} to="/">About Old & Rare Books</Link>
                            <Link className={styles.link} to="/">Rare Books Condition</Link>
                            <Link className={styles.link} to="/">Book Care Guide</Link>
                            <Link className={styles.link} to="/">Wholesale Rare Books</Link>
                        </Grid>
                        <Grid item xs={12} md={2.4} className={styles.linksContainer}>
                            <img className={styles.footerLogo2} src="https://images.ctfassets.net/fxjn30k1sseo/3mNejntqYGTNmwcssQzKOm/d3a7d691d8041c07383babba508691ea/footer-b-corp.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default LinkSection;