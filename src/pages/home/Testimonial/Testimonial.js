import { Container } from '@mui/material';
import styles from './Testimonial.module.css'
import React from 'react';

const Testimonial = () => {
    return (
        <>
            <Container className={styles.container}>
                <h3>BookBird, the Wonderful World of Books and more!</h3>
                <p>If you’re looking for great value second hand books, then World of Books is the place for you.</p>
                <p>As you may already know, we aren’t like other online book stores. For starters, we don’t believe that books should only be read once, or have a single owner. Literature should endure and be continually recycled, which is why we help millions of used books find new homes every year.</p>
                <p>World of Books also buys directly from charities, taking the titles they don’t want or haven’t got space for. So as well as preventing the destruction of perfectly good books, our customers are helping to support good causes too.</p>
                <h3>Cheap Books, Fantastic Choice</h3>
                <p>Browse through hundreds of thousands of titles today. Whether you’re a fan of crime fiction or celebrity autobiographies, classic literature or modern best sellers, we have it all. Better still, our books are available at the cheapest prices and come with free delivery in the UK too.</p>
                <p>So booklovers, academics and casual readers, rejoice! There’s something for everyone at World of Books, and it won’t cost the earth.</p>
            </Container>
        </>
    );
};

export default Testimonial;