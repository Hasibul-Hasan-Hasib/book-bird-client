import React from 'react';
import styles from './Navigation.module.css';
import { useNavigate } from 'react-router-dom';
import { Heart, Login, Logout, User } from 'tabler-icons-react'
import { Menu, Text } from '@mantine/core';
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
                                <Text className={styles.links} style={{border:'none'}}>Hi, {user.displayName}</Text>
                                :
                                <Text className={styles.links}>My Account</Text>
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
                    <Text className={styles.links} onClick={e => navigate('/wishlist')}>Wishlist <Heart size={16} /></Text>
                    <Text className={styles.links} onClick={e => navigate('/faq')}>FAQ</Text>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;