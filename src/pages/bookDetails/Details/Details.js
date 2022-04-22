import React from 'react';
import styles from './Details.module.css'
import { Button, Container, Grid } from '@mantine/core'
import { Heart } from 'tabler-icons-react';




const Details = () => {
    return (
        <>
            <Container size='lg' >
                <Grid gutter="xs" justify="center" align="flex-start" className={styles.detailsContainer}>
                    <Grid.Col span={12} xs={4} md={3} >
                        <img className={styles.bookImg} src="https://productimages.worldofbooks.com/152901929X.jpg" alt="" />
                    </Grid.Col>
                    <Grid.Col span={12} xs={8} md={5}>
                        <h1 className={styles.title}>Shuggie Bain by
                            <span className={styles.colorTitle}> Douglas Stuart</span>
                        </h1>
                        <h4 className={styles.title}>Publisher - <span className={styles.colorTitle}>XYZ limited</span></h4>
                        <h4 className={styles.title}>Condition - <span className={styles.colorTitle}>New</span></h4>
                        <h1 className={styles.price}>£ 3.49</h1>
                        <div>
                        <Button sx={{ marginBottom: '1rem' }} variant='outline'>Well Read</Button>
                        <Button sx={{ marginBottom: '1rem', marginLeft:'1rem' }} variant='outline'>New</Button>
                        </div>
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
                            <p>A heart-wrenchingly moving first novel set in Glasgow during the Thatcher years, Shuggie Bain tells the story of a boy's doomed attempt to save his proud, alcoholic mother from her addiction.</p>
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