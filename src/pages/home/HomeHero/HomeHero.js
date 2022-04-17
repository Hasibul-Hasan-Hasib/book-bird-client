import { Button, Container, Grid } from '@mantine/core';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './HomeHero.module.css';
import Img from '../../../assets/image/heroImg/heroImg1.png';
import React from 'react';

const HomeHero = () => {
    return (
        <>
            <Container size='lg'>
                <Grid className={styles.heroContainer} container>
                    <Grid.Col xs={12} sm={6}>
                        <img src={Img} className={styles.heroImg} alt="" />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={6} className={styles.textContainer}>
                        <h2 className={styles.title}>Sell your old books with Ziffit</h2>
                        <h3 className={styles.texts}>Want to give your old books another lease of life? Declutter and make some extra cash by trading your used books, CDs, DVDs, and games through Ziffit.</h3>
                        <h4 className={styles.texts}>Ziffit is an easy, efficient, and sustainable way to get rid of books and media you no longer need. Check out the free app and start trading today. <br />Find out more below.</h4>
                        <div>
                            <Button variant='outline'>Sell Now</Button>
                        </div>
                    </Grid.Col>
                </Grid>
                <hr />
            </Container>
        </>
    );
};

export default HomeHero;