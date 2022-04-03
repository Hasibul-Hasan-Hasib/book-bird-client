import { Container } from '@mui/material';
import styles from './CategoryBar.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryBar = () => {
    return (
        <>
            <Container>
                <nav className={styles.categoryList}>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Highlights</button>
                    </NavLink>
                    <NavLink to='/about'>
                        <button className={styles.categoryItems}>Fiction Books</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Non-Fiction Books</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Children's Books</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Rare Books</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Music</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>DVD & Blu-Ray</button>
                    </NavLink>
                    <NavLink to='/home'>
                        <button className={styles.categoryItems}>Video Games</button>
                    </NavLink>
                </nav>
            </Container>
            <hr className={styles.underLine} />
        </>
    );
};

export default CategoryBar;