import React from 'react';
import styles from './SecondStepper.module.css';
import Items from '../Items/Items';
import { DatePicker } from '@mantine/dates';
import { Button, Container, Grid, TextInput, Select, Textarea } from '@mantine/core';



const SecondStepper = () => {
    return (
        <>
            <Container size="md" sx={{ marginTop: '2rem' }}>
                <Grid columns={12} justify="space-between">
                    <Grid.Col span={12} sm={7} className={styles.box} >
                        <h2 >Billing Information</h2>
                        <hr />
                        <div className={styles.infoContainer}>
                            <div className={styles.label}>Email Address:</div>
                            <div className={styles.multipleItemAlign}>
                                <span>mdhasibulctg100@gmail.com</span>
                                <Button variant='default'>Edit</Button>
                            </div>
                            <div className={styles.multipleItemAlign}>
                                <TextInput
                                    sx={{ width: "48%" }}
                                    label="First Name"
                                    required
                                />
                                <TextInput
                                    sx={{ width: "48%" }}
                                    label="Last Name"
                                    required
                                />
                            </div>
                            <div className={styles.itemAlign}>
                                <DatePicker placeholder="Pick date" label="Event date" required />
                            </div>
                            <div className={styles.itemAlign}>
                                <Select
                                    label="Country"
                                    placeholder="Pick one"
                                    data={[
                                        { value: 'london', label: 'london' },
                                        { value: 'new york', label: 'new york' },
                                        { value: 'dhaka', label: 'dhaka' },
                                        { value: 'chittagong', label: 'chittagong' },
                                    ]}
                                />
                            </div>
                            <div className={styles.itemAlign}>
                                <Textarea
                                    label="Your Address"
                                    required
                                />
                            </div>
                            <div className={styles.multipleItemAlign}>
                                <Select
                                    sx={{ marginRight: '0.5rem' }}
                                    label="City"
                                    data={[
                                        { value: 'react', label: 'React' },
                                        { value: 'ng', label: 'Angular' },
                                        { value: 'svelte', label: 'Svelte' },
                                        { value: 'vue', label: 'Vue' },
                                    ]}
                                />
                                <TextInput
                                    label="State/Province:"
                                    required
                                />
                                <TextInput
                                    sx={{ marginLeft: '0.5rem' }}
                                    label="Zip/Postal Code:"
                                    required
                                />
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={12} sm={4} className={styles.box} sx={{ height: 410 }}>
                        <Items />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default SecondStepper;