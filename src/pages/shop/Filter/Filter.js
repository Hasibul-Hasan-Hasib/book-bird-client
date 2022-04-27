import React from 'react';
import styles from './Filter.module.css'
import { X, ChevronRight } from 'tabler-icons-react'
import { Link } from 'react-router-dom';
import { Select } from '@mantine/core';


const Filter = () => {



    return (
        <>  
            

            {/* <div className={styles.filterContainer}>
                <div>
                    <h3>Active Category</h3>
                    <div className={styles.activeCategory}>
                        <span className={styles.label}>Category:</span>
                        <div className={styles.itemContainer}>
                            <span className={styles.itemName}>Fiction</span>
                            <X color="orange"></X>
                        </div>
                        <div className={styles.itemContainer}>
                            <div className={styles.align}>
                                <ChevronRight color="orange" />
                                <span className={styles.itemName}>Modern</span>
                            </div>
                            <X color="orange"></X>
                        </div>
                        <div className={styles.itemContainer}>
                            <span className={styles.label}>Keyword: </span>
                            <span className={styles.itemName}>"journey"</span>
                        </div>
                        <div className={styles.itemContainer}>
                            <span className={styles.label}>Price Range: </span>
                            <span className={styles.itemName}>"$20-15"</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Filter By Category</h3>
                    <Link to="/category/Modern%20Fiction" className={styles.link}><span>Modern Fiction</span><span>(50)</span></Link>
                    <Link to="/category/Romance" className={styles.link}><span>Romance</span><span>(50)</span></Link>
                </div>
                <div>
                    <h3>Condition</h3>
                    <Link to="?con=Good" className={styles.link}><span>Good</span><span>(50)</span></Link>
                    <Link to="?con=Very%20Good" className={styles.link}><span>Very Good</span><span>(50)</span></Link>
                    <Link to="?con=Well%20Read" className={styles.link}><span>Well Read</span><span>(50)</span></Link>
                </div>
                <div>
                    <h3>Binding Type</h3>
                    <Link to="?bt=Paperback" className={styles.link}><span>Paperback</span><span>(50)</span></Link>
                    <Link to="?bt=Hardback" className={styles.link}><span>Hardback</span><span>(50)</span></Link>
                </div>
                <div>
                    <h3>Price Range</h3>
                    <Link to="/" className={styles.link}><span>Less than $10.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$11.00-$20.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$21.00-$30.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$31.00-$40.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$41.00-$50.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$51.00-$60.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$61.00-$70.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$71.00-$80.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$81.00-$90.00</span><span>(50)</span></Link>
                    <Link to="/" className={styles.link}><span>$91.00-$100.00</span><span>(50)</span></Link>
                </div>
            </div> */}
        </>
    );
};

export default Filter;