import React from 'react';
import styles from './EmailSection.module.css'
import { Button, Grid, Input, Tooltip, Container } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const EmailSection = () => {

    const rightSection = (
        <Tooltip label="We do not send spam" position="top" placement="end">
            <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
        </Tooltip>
    );


    return (
        <>
            <div className={styles.footerEmailContainer}>
                <h1 className={styles.title}>Join Our mailing list</h1>
                <p className={styles.text}>Be the first to get updates as well as access to exclusive offers and promotions</p>
                <Container size='lg'>
                    <Grid className={styles.emailAreaContainer}>
                        <Grid.Col xs={7} sm={6} >
                            <Input placeholder="Your email" rightSection={rightSection} />
                        </Grid.Col>
                        <Grid.Col xs={3} sm={2} >
                            <Button className={styles.btn}>Sign up</Button>
                        </Grid.Col>
                    </Grid>
                </Container>
                <p className={styles.text}>By signing up, you agree to our <Link className={styles.link} to="home">Privacy Policy</Link> and <Link to='/about'>Terms & Conditions</Link></p>
            </div>
        </>
    );
};

export default EmailSection;