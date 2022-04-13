import React from 'react';
import styles from './HomeBrowse.module.css'
import { Container, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom';



const HomeBrowse = (props) => {

    const title = props.title;
    const data = props.data;

    return (
        <>
            <Container>
                <h6 className={styles.title}>Browse {title}</h6>
                <NavLink to='/about' className={styles.link}>
                    <Grid container className={styles.allCategoryContainer}>
                        {
                            data.map(data =>
                                <Grid xs={6} sm={4} md={3} lg={2} item className={styles.categorySectionContainer}>
                                    <div className={styles.imgContainer}>
                                        <img className={styles.categoryImg} src={data.bookImg} alt="" />
                                    </div>
                                    <h4 className={styles.categoryName}>{data.categoryName}</h4>
                                </Grid>
                            )
                        }
                    </Grid>
                </NavLink>
                <hr />
            </Container>
        </>
    );
};

export default HomeBrowse;