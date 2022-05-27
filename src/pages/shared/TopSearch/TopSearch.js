import React from 'react';
import styles from './TopSearch.module.css'
import CategoryBar from './CategoryBar/CategoryBar';
import SmallSearchBar from './SmallSearchBar/SmallSearchBar';
import TopSearchBar from './TopSearchBar/TopSearchBar';
import NavigationBar from '../NavigationBar/NavigationBar'

const TopSearch = () => {
    return (
        <div >
            <NavigationBar></NavigationBar>
            <div className={styles.searchBar1}>
                <TopSearchBar  />
                <CategoryBar />
            </div>
            <div className={styles.searchBar2}>
                <SmallSearchBar />
            </div>
        </div>
    );
};

export default TopSearch;