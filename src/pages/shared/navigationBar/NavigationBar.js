import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import {Heart} from 'tabler-icons-react'



const NavigationBar = () => {
    return (
        <div className={styles.navBar}>
            <nav className={styles.navContainer}>
                <div className={styles.linkContainer}>
                    <NavLink className={styles.links} to="/home"><button className={styles.linkButton}>My Account <span style={{ margin: '0 0.3rem 0 0' }}></span> | </button></NavLink>
                    <NavLink className={styles.links} to="/about"><button className={styles.linkButton}>Wishlist <Heart size={16} style={{ margin: '0 0.3rem 0 0.1rem' }} /> |</button></NavLink>
                    <NavLink className={styles.links} to="/services"><button className={styles.linkButton}>FAQ</button></NavLink>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;