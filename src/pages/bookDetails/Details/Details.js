import React from 'react';
import styles from './Details.module.css'
import { Accordion, Button, Container, Grid } from '@mantine/core'
import { Heart } from 'tabler-icons-react';
import { CartState } from '../../../contexts/CartContext';




const Details = (props) => {


    const { Sku, Title, Author, Image, Publisher, Condition, Binding_type, Price, Summary_Description, Writer_Description, ISBN_13, ISBN_10, Year_published, Number_of_pages, Prizes, Cover_note, Note } = props.book;


    const {
        state: { cart },
        dispatch
    } = CartState();



    return (
        <>
            <Container size='lg' >
                <Grid gutter="xs" justify="center" align="flex-start" className={styles.detailsContainer}>
                    <Grid.Col span={12} xs={4} md={3} >
                        <img className={styles.bookImg} src={Image} alt="" />
                    </Grid.Col>
                    <Grid.Col span={12} xs={8} md={5}>
                        <h1 className={styles.title}>{Title?.split('by', 1)}<span className={styles.colorTitle}>by</span> {Author}</h1>
                        <h4 className={styles.title}>Publisher - <span className={styles.colorTitle}>{Publisher}</span></h4>
                        <h4 className={styles.title}>Author - <span className={styles.colorTitle}>{Publisher}</span></h4>
                        <h4 className={styles.title}>Condition - <span className={styles.colorTitle}>{Condition}</span></h4>
                        <h1 className={styles.price}>£ {Price?.slice(1)} </h1>
                        <Button sx={{ marginBottom: '1rem' }} variant='outline'>{Condition}</Button>
                        <div className={styles.btnContainer}>
                            {
                                cart.some(p => p.book.Sku === Sku) ?
                                    (
                                        <Button onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: props,
                                            })
                                        }}
                                            color="red" className={styles.addCartBtn} >Remove From Cart</Button>
                                    )
                                    :
                                    (
                                        <Button onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: props,
                                            })
                                        }} className={styles.addCartBtn} >Add to Cart</Button>
                                    )
                            }
                            <div className={styles.iconBtnContainer}>
                                <Heart className={styles.iconBtn} size={30} />
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={12} md={4}>
                        <div>
                            <h2>Summary</h2>
                            <p>{Summary_Description?.slice(0, 350).split(". ", 1)}.</p>
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
                <Accordion initialItem={0}>
                    <Accordion.Item label="Writer Description" style={{ border: '1px solid gray', borderRight: "none", borderLeft: 'none' }}>
                        {Writer_Description}
                    </Accordion.Item>
                    <Accordion.Item label="More Details" style={{ borderBottom: '1px solid gray', marginBottom: "3rem", borderLeft: 'none' }}>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Sku</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Sku}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>ISBN 13</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{ISBN_13}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>ISBN 10</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{ISBN_10}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Title</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Title}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Author</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Author}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Condition</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Condition}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Binding Type</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Binding_type}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Publisher</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Publisher}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Year Published</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Year_published}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Number of Pages</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Number_of_pages}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Prizes</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Prizes}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Cover Note</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Cover_note}</span>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <span className={styles.colorTitle}>Note</span>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <span>{Note}</span>
                            </Grid.Col>
                        </Grid>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

export default Details;