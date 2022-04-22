import React, { useState } from 'react';
import styles from "./Checkout.module.css";
import { At } from 'tabler-icons-react';
import { Stepper, Button, Group, Container, Grid, TextInput, ScrollArea } from '@mantine/core';


const Checkout = () => {

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    return (
        <>
            <div >
                <h1 className={styles.checkoutTitle}>STAY MADE UP</h1>
            </div>
            <Container size="lg">
                <div>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                        <Stepper.Step label="First step" description="Create an account">
                            <Container size="md" sx={{ marginTop: '2rem' }}>
                                <Grid columns={12} justify="space-between">
                                    <Grid.Col span={7} className={styles.box} sx={{ height: 280 }}>
                                        <h2 >Checkout method</h2>
                                        <hr />
                                        <p>Type in your email to get started</p>
                                        <TextInput label="Your email" placeholder="Your email" icon={<At size={14} />} className={styles.emailField} />
                                        <Button className={styles.emailBtn}>Continue</Button>
                                    </Grid.Col>
                                    <Grid.Col span={4} className={styles.box}>
                                        <h2>Products</h2>
                                        <hr />
                                        <ScrollArea style={{ height: 150,padding:'0 1rem'}}>
                                            <Grid>
                                                <Grid.Col span={4}><img src="https://productimages.worldofbooks.com/1472154665_thumbnail.jpg" alt="book pic" className={styles.bookImg}/></Grid.Col>
                                                <Grid.Col span={8}>
                                                    
                                                </Grid.Col>
                                            </Grid>
                                        </ScrollArea>
                                        <hr />
                                        <div className={styles.prices}>
                                            <h4 className={styles.price}>Subtotal</h4>
                                            <h4 className={styles.price}>$12.25</h4>
                                        </div>
                                        <hr style={{width:'90%'}}/>
                                        <div className={styles.prices}>
                                            <h4 className={styles.price}>Grand total</h4>
                                            <h4 className={styles.price}>$12.25</h4>
                                        </div>
                                    </Grid.Col>
                                </Grid>
                            </Container>
                        </Stepper.Step>
                        <Stepper.Step label="Second step" description="Verify email">
                        </Stepper.Step>
                        <Stepper.Step label="Final step" description="Get full access">
                            Step 3 content: Get full access
                        </Stepper.Step>
                        <Stepper.Completed>
                            Completed, click back button to get to previous step
                        </Stepper.Completed>
                    </Stepper>
                    <Group position="center" mt="xl">
                        <Button variant="default" onClick={prevStep}>Back</Button>
                        <Button onClick={nextStep}>Next step</Button>
                    </Group>
                </div>

            </Container>
        </>
    );
};

export default Checkout;