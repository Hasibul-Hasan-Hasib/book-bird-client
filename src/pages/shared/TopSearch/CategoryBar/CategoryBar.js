import { Container } from '@mantine/core';
import styles from './CategoryBar.module.css';
import React from 'react';
import { Menu } from '@mantine/core';
import { Link } from 'react-router-dom';



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
                        <Menu.Item ><Link className={styles.link} to='/category/Fiction Books'>Fiction Books</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Modern Fiction'>Modern Fiction</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Classic Fiction'>Classic Fiction</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Fantasy'>Fantasy</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Romance'>Romance</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Adventure'>Adventure</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/all'>See All Books</Link></Menu.Item>
                    </Menu>



                    <Menu
                        trigger="hover"
                        control={
                            <button className={styles.categoryItems}>Non-Fiction Books</button>
                        }
                    >
                        <Menu.Label>Non-Fiction Books</Menu.Label>
                        <Menu.Item ><Link className={styles.link} to='/category/Fiction Books'>Fiction Books</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Modern Fiction'>Modern Fiction</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Classic Fiction'>Classic Fiction</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Fantasy'>Fantasy</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Romance'>Romance</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/Adventure'>Adventure</Link></Menu.Item>
                        <Menu.Item ><Link className={styles.link} to='/category/all'>See All Books</Link></Menu.Item>
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