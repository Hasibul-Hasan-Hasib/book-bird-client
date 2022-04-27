import React from 'react';
import styles from './Details.module.css'
import { Button, Container, Grid } from '@mantine/core'
import { Heart } from 'tabler-icons-react';




const Details = (props) => {

    const {Title,Author,Image,Publisher,Condition,Price,Summary_Description} = props.book;

    return (
        <>
            <Container size='lg' >
                <Grid gutter="xs" justify="center" align="flex-start" className={styles.detailsContainer}>
                    <Grid.Col span={12} xs={4} md={3} >
                        <img className={styles.bookImg} src={Image} alt="" />
                    </Grid.Col>
                    <Grid.Col span={12} xs={8} md={5}>
                        <h1 className={styles.title}>{Title?.split('by',1)}<span className={styles.colorTitle}>by</span> {Author}</h1>
                        <h4 className={styles.title}>Publisher - <span className={styles.colorTitle}>{Publisher}</span></h4>
                        <h4 className={styles.title}>Author - <span className={styles.colorTitle}>{Publisher}</span></h4>
                        <h4 className={styles.title}>Condition - <span className={styles.colorTitle}>{Condition}</span></h4>
                        <h1 className={styles.price}>£ {Price?.slice(1)} </h1>
                        <Button sx={{ marginBottom: '1rem' }} variant='outline'>{Condition}</Button>
                        <div className={styles.btnContainer}>
                            <Button className={styles.addCartBtn}>Add to Cart</Button>
                            <div className={styles.iconBtnContainer}>
                                <Heart className={styles.iconBtn} size={30} />
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={12} md={4}>
                        <div>
                            <h2>Summary</h2>
                            <p>{Summary_Description?.slice(0,350).split(". ",1)}.</p>
                        </div>
                        <hr />
                        <div>
                            <h2>Books that don't cost the earth</h2>
                            <ul>
                                <li>Free shipping in the UK</li>
                                <li>Supports the circular-economy</li>
                                <li>100% recyclable packaging</li>
                                <li>Buy-back with Ziffit</li>
                            </ul>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default Details;