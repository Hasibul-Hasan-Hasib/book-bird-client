import { Container } from '@mantine/core';
import styles from './CategoryBar.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from '@mantine/core';

const CategoryBar = () => {


    return (
        <>
            <Container size="lg">
                <nav className={styles.categoryList}>
                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Highlights</button>
                        }
                    >
                        <Menu.Label>Application</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>


                    
                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Fiction Books</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Non-Fiction Books</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Children's Books</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Rare Books</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Music</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>




                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>DVD & Blu-Ray</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>


                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Video Games</button>
                        }
                    >
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item>Search</Menu.Item>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu>
                </nav>
            </Container>
            <hr className={styles.underLine} />
        </>
    );
};

export default CategoryBar;