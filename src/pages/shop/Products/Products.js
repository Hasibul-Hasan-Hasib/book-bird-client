import React, { useState } from 'react';
import styles from './Products.module.css';
import Card from '../../shared/Card/Card';
import { Grid, Pagination } from '@mantine/core';



const Products = (props) => {

    const items = props.books;
    const [activePage, setPage] = useState(1);

    const itemPerPage = 24;
    const pageVisited = (activePage-1) * itemPerPage;
    console.log(items);

    return (
        <>
            <Grid className={styles.cardContainer}>
                {
                    items.slice(pageVisited, pageVisited + itemPerPage).map(item => <Grid.Col span={6} xs={4} lg={3} className={styles.card}>
                        <Card book={item} />
                    </Grid.Col>)
                }
            </Grid>
            <div className={styles.paginationContainer}>
                <Pagination size="md" siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />
            </div>
        </>
    );
};

export default Products;