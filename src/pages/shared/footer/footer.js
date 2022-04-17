import { Container } from '@mantine/core';
import styles from './Footer.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import EmailSection from './EmailSection/EmailSection';
import LinkSection from './LinkSection/LinkSection';

const footer = () => {
    return (
        <>
            <EmailSection />
            <LinkSection />
            <Container>
                <div className={styles.copyRight}>
                    <p>© 2022 Book-Bird Ltd</p>
                    <Link to='/' className={styles.link}>Privacy Policy</Link>
                    <Link to='/' className={styles.link}>Terms and Condition</Link>
                </div>
            </Container>
        </>
    );
};

export default footer;