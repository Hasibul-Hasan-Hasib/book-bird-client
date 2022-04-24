import React from 'react';
import styles from './FirstStepper.module.css'
import { At } from 'tabler-icons-react';
import { Button, Container, Grid, TextInput } from '@mantine/core';
import Products from '../Products/Products';



const FirstStepper = () => {
    return (
        <>
            <Container size="md" sx={{ marginTop: '2rem' }}>
                <Grid columns={12} justify="space-between">
                    <Grid.Col span={12} sm={7} className={styles.box} sx={{ height: 280 }}>
                        <h2 >Checkout method</h2>
                        <hr />
                        <p>Type in your email to get started</p>
                        <TextInput label="Your email" placeholder="Your email" icon={<At size={14} />} className={styles.emailField} required/>
                        <Button className={styles.emailBtn}>Continue</Button>
                    </Grid.Col>
                    <Grid.Col span={12} sm={4} className={styles.box} sx={{ height: 410 }}>
                        <Products />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default FirstStepper;