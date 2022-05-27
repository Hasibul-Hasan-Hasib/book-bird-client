import React from 'react';
import styles from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Login, Logout, User } from 'tabler-icons-react'
import { Menu } from '@mantine/core';
import { Auth } from '../../../contexts/AuthContext';




const NavigationBar = () => {

    const navigate = useNavigate();
    const { logOut, setUser, user, setIsLoading } = Auth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                window.location.reload();
            })
            .finally(() => {
                setIsLoading(true)
            })
    }


    return (
        <div className={styles.navBar}>
            <nav className={styles.navContainer}>
                <div className={styles.linkContainer}>
                    <Menu
                        placement="center"
                        trigger="hover"
                        size='sm'
                        sx={{ textDecoration: 'none' }}
                        control={
                            user.email ?
                                <div className={styles.links}><button className={styles.linkButton}>Hi, {user.displayName} <span style={{ margin: '0 0.3rem 0 0' }}></span> | </button></div>
                                :
                                <div className={styles.links}><button className={styles.linkButton}>My Account <span style={{ margin: '0 0.3rem 0 0' }}></span> | </button></div>
                        }
                    >
                        <Menu.Item icon={<User />} onClick={e => navigate('/profile')}>
                            Profile
                        </Menu.Item>
                        {
                            user.email ?
                                <Menu.Item icon={<Logout />} onClick={handleLogout}>
                                    Logout
                                </Menu.Item>
                                :
                                <Menu.Item icon={<Login />} onClick={e => navigate('/login')}>
                                    Login
                                </Menu.Item>
                        }
                    </Menu>
                    <Link className={styles.links} to="/about"><button className={styles.linkButton}>Wishlist <Heart size={16} style={{ margin: '0 0.3rem 0 0.1rem' }} /> |</button></Link>
                    <Link className={styles.links} to="/services"><button className={styles.linkButton}>FAQ</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;