import React from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    TextInput,
    PasswordInput,
    Text,
    Container,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Image,
    createStyles,
    Grid,
    Title
} from '@mantine/core';
import LoginImage from '../../assets/image/heroImg/Computer login-amico.svg'
import { Auth } from '../../contexts/AuthContext';






const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },


    desktopImage: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));



export default function Login() {
    const [type, toggle] = useToggle('login', ['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: false
        },
        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 6,
        },
    });

    const { auth, signInUsingPopup, setError, setUser, createUserWithEmailAndPassword, signInWithEmailAndPassword } = Auth();
    const navigate = useNavigate();
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsingPopup()
            .then(result => {
                setUser(result.user)
                navigate(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const registerWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                navigate(redirect_url)
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                navigate(redirect_url)
            })
            .catch((error) => {
                setUser(error.message)
            })
    }




    const { classes } = useStyles();


    return (
        <Container className={classes.root} size="lg">
            {
                type === "login" ?
                    <Title sx={{ textAlign: 'center', margin: '2rem' }}>Book Birds Login</Title>
                    :
                    <Title sx={{ textAlign: 'center', margin: '2rem' }}>Book Birds Register</Title>
            }
            <Grid align="center" justify='space-evenly' style={{ marginTop: "1rem" }}>
                <Grid.Col span={9} sm={5}>
                    <Paper radius="md">
                        <Text size="lg" weight={500}>
                            Welcome to BookBirds, {type} with
                        </Text>

                        <Group grow mb="md" mt="md">
                            <Button variant='outline' radius="xl"
                                onClick={handleGoogleSignIn}
                            >Google</Button>
                            <Button variant='outline' radius="xl">Twitter</Button>
                        </Group>

                        <Divider label="Or continue with email" labelPosition="center" my="lg" />

                        <form onSubmit={form.onSubmit((values) => {
                            if (type === 'register') {
                                registerWithEmail(values.email, values.password)
                            }
                            else if (type === 'login') {
                                loginWithEmail(values.email, values.password)
                            }
                        })}>
                            <Group direction="column" grow>
                                {type === 'register' && (
                                    <TextInput
                                        label="Name"
                                        placeholder="Your name"
                                        value={form.values.name}
                                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    />
                                )}

                                <TextInput
                                    required
                                    label="Email"
                                    placeholder="hello@mantine.dev"
                                    value={form.values.email}
                                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                    error={form.errors.email && 'Invalid email'}
                                />

                                <PasswordInput
                                    required
                                    label="Password"
                                    placeholder="Your password"
                                    value={form.values.password}
                                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                    error={form.errors.password && 'Password should include at least 6 characters'}
                                />

                                {type === 'register' && (
                                    <Checkbox
                                        label="I accept terms and conditions"
                                        checked={form.values.terms}
                                        onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                    />
                                )}
                            </Group>

                            <Group position="apart" mt="xl">
                                <Anchor component="button" type="button" color="gray" onClick={() => toggle()} size="xs">
                                    {type === 'register'
                                        ? 'Already have an account? Login'
                                        : "Don't have an account? Register"}
                                </Anchor>
                                {
                                    type === 'login'
                                        ?
                                        <Button type="submit" >{upperFirst(type)}</Button>
                                        :
                                        <Button type="submit" >{upperFirst(type)}</Button>
                                }
                            </Group>
                        </form>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={6} className={classes.desktopImage}>
                    <Image src={LoginImage} />
                </Grid.Col>
            </Grid>
            <Button component={Link} to='/' sx={{ width: '8rem', margin: '2rem auto' }}>Go Home</Button>
        </Container>
    );
}