import React from 'react';
import styles from './HomeBrowse.module.css'
import { Container, Grid } from '@mantine/core'
import { NavLink } from 'react-router-dom';



const HomeBrowse = (props) => {

    const title = props.title;
    const data = props.data;

    return (
        <>
            <Container size='lg'>
                <h6 className={styles.title}>Browse {title}</h6>
                <NavLink to='/about' className={styles.link}>
                    <Grid className={styles.allCategoryContainer}>
                        {
                            data.map(data =>
                                <Grid.Col span={6} xs={4} sm={3} md={3} lg={2} item className={styles.categorySectionContainer}>
                                    <div className={styles.imgContainer}>
                                        <img className={styles.categoryImg} src={data.bookImg} alt="" />
                                    </div>
                                    <h4 className={styles.categoryName}>{data.categoryName}</h4>
                                </Grid.Col>
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