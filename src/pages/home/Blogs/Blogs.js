import { Button, Container, Grid } from '@mantine/core';
import React from 'react';
import styles from './Blogs.module.css'


const Blogs = () => {

    return (
        <>
            <Container size='lg'>
                <Grid className={styles.blogsContainer}>
                    <Grid.Col sm={6} md={4} className={styles.blogContainer}>
                        <div>
                            <img src="https://images.ctfassets.net/fxjn30k1sseo/6RYI8CrhLCta3Q2bvF8WaA/bbd74495719170cb6a492b1e5d1c0e92/What-it-means-to-be-b-corp-insta-sml.png" className={styles.blogImg} alt="" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.title}>Why we love being a B Corp</h3>
                            <h4 className={styles.text}>We know, we say it a lot. But what does it really mean, and why do we wear this status with so much pride? Every certified B Corp uses its profits and growth to propel positive change and impact for their employees, communities and the environment. That’s the bottom line. Here’s a few of the key reasons why we love being a B Corp...</h4>
                            <Button variant="outline">Continue reading</Button>
                        </div>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} className={styles.blogContainer}>
                        <div>
                            <img src="https://images.ctfassets.net/fxjn30k1sseo/69iR48SFLf7IYWcwIWCj8H/7f0b9c5b23d202d95ced2ab895e6ec3f/7_reasons-instagram-slide.png" className={styles.blogImg} alt="" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.title}>7 Reasons to Buy Used Books</h3>
                            <h4 className={styles.text}>As a used bookseller, we really do find that buying used books is the way to go. Our seven reasons below are a great starting point for getting to know World of Books and realising how great a used book can be.</h4>
                            <Button variant="outline">Continue reading</Button>
                        </div>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4} className={styles.hidden}>
                        <div>
                            <img src="https://images.ctfassets.net/fxjn30k1sseo/2oJoovTNBqzWko5VEDi3iY/3cc581b02b01e79e690c31a1ec0c2030/Journey-of-a-Book-insta-sml.png" className={styles.blogImg} alt="" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.title}>The Journey of a Book</h3>
                            <h4 className={styles.text}>At World of Books, we were founded on an ethos to do good, help charities, and protect the planet; it’s what we’re all about. Because of this, the journey of a book can be a wild one! We get our books from a number of sources. Last year, we generated £3 million in value for our charity partners, who provide us with many of our books. We use book banks and our customers can even trade-in their used books using our Ziffit service. This is the circular economy in action.</h4>
                            <Button variant="outline">Continue reading</Button>
                        </div>
                    </Grid.Col>
                </Grid>
                <hr />
            </Container>
        </>
    );
};

export default Blogs;