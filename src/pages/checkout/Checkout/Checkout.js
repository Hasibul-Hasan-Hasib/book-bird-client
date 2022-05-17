import React, { useState } from 'react';
import styles from "./Checkout.module.css";
import logo from '../../../assets/image/logo/logo2.png'
import { Stepper, Button, Group, Container, Image } from '@mantine/core';
import FirstStepper from '../FirstStepper/FirstStepper';
import { Check } from 'tabler-icons-react';
import SecondStepper from '../SecondStepper/SecondStepper';
import ThirdStepper from '../ThirdStepper/ThirdStepper';
import { Link } from 'react-router-dom';


const Checkout = () => {

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    


    return (
        <>
            <div >
                <Link to='/'><Image className={styles.logo} src={logo} alt="logo"></Image></Link>
            </div>
            <hr className={styles.underline} />
            <Container size="lg">
                <div>
                    <Stepper active={active} onStepClick={setActive} size="sm" breakpoint={400}>
                        <Stepper.Step icon={<Check />} label="Basket">
                            <FirstStepper />
                        </Stepper.Step>
                        <Stepper.Step icon={<Check />} label="Delivery">
                            <SecondStepper />
                        </Stepper.Step>
                        <Stepper.Step icon={<Check />} label="Payment">
                            <ThirdStepper />
                        </Stepper.Step>
                        <Stepper.Completed>
                            <div>
                                <h1 style={{ textAlign: 'center' }}>Congratulations your purchase is <span style={{ color: "#2196f3" }}>Successful</span></h1>
                            </div>
                        </Stepper.Completed>
                    </Stepper>
                    <Group position="center" mt="xl">
                        {
                            active === 0 ?
                                <Button variant="default" onClick={prevStep} disabled>Back</Button> :
                                <Button variant="default" onClick={prevStep}>Back</Button>
                        }
                        <Button onClick={nextStep}>Continue Process</Button>
                        <Button component={Link} to='/cart' variant='default'>Go to Cart</Button>
                    </Group>
                </div>
            </Container>
        </>
    );
};

export default Checkout;