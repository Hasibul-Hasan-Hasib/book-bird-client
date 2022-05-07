import { Container } from '@mantine/core';
import styles from './CategoryBar.module.css';
import React from 'react';
import { Menu } from '@mantine/core';
import { Link, } from 'react-router-dom';



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
                        <Menu.Label>Fiction Books</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>
                        <Menu.Item >Search</Menu.Item>
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
                        <Menu.Item component={Link} className={styles.link} to="/category/Fiction Books" >All Fiction Books</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Modern Fiction">Modern Fiction</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Classic Fiction">Classic Fiction</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Fantasy">Fantasy</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Romance">Romance</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Adventure">Adventure</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/all">See All Books</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Non-Fiction Books</button>
                        }
                    >
                        <Menu.Label>Non-Fiction Books</Menu.Label>
                        <Menu.Item component={Link} className={styles.link} to="/category/Non-Fiction Books">All Non-Fiction Books</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Biography and True Stories" >Biography and True Stories</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/English Language Teaching">English Language Teaching</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Health and Personal Development">Health and Personal Development</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Lifestyle">Lifestyle</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Reference Books">Reference Books</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/all">See All Books</Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Children's Books</button>
                        }
                    >
                        <Menu.Label>Children's Books</Menu.Label>
                        <Menu.Item component={Link} className={styles.link} to="/category/Children's Books" >All Children's Books</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Children's Fiction and True Stories">Children's Fiction and True Stories</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Children's Non-Fiction">Children's Non-Fiction</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Activity">Activity</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Children's Reference Books">Children's Reference Books</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/Children's Education and Learning">Children's Education and Learning</Menu.Item>
                        <Menu.Item component={Link} className={styles.link} to="/category/all">See All Books</Menu.Item>
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