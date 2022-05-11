import React, { useState } from 'react';
import styles from './Shop.module.css'
import { Button, Container, Grid, Group, Loader, NumberInput, Select, Text } from '@mantine/core'
import Products from '../Products/Products';
import TopSearch from '../../shared/TopSearch/TopSearch';
import Footer from '../../shared/Footer/Footer';
import { useParams } from 'react-router-dom';
import useProductData from '../../../hooks/useProductData';


const Shop = () => {

    const { books, isLoading } = useProductData();


    const { categoryName } = useParams();

    //tried to use query string

    // const query = new URLSearchParams(search);
    // const con = query.get('con');
    // const binding = query.get('binding')




    const [category, setCategory] = useState(categoryName);
    const [condition, setCondition] = useState('');
    const [binding, setBinding] = useState('')
    const [low, setLow] = useState(10)
    const [high, setHigh] = useState(100)



    const categoryFilter = books.filter(item => category !== "all" ? item.Category1 === category || item.Category2 === category : item)

    const filter = () => {
        const conditionFilter = categoryFilter.filter(item => condition ? item.Condition === condition : item)
        const bindingFilter = conditionFilter.filter(item => binding ? item.Binding_type === binding : item)
        const priceFilter = bindingFilter.filter(item => high && low ? low <= parseFloat(item.Price.slice(1, 10)) && parseFloat(item.Price.slice(1, 10)) <= high : item)
        return priceFilter;
    }

    const reset = () => {
        setCategory('all')
        setCondition('')
        setBinding('')
        setLow(10)
        setHigh(100)
    }





    return (
        <>
            <TopSearch />
            <Container size="lg" className={styles.container}>
                <Grid>
                    <Grid.Col span={4}>
                        <h3>Search Filter</h3>
                        <Select
                            label="Category"
                            defaultValue={categoryName}
                            searchable
                            value={category}
                            onChange={setCategory}
                            data={[
                                { value: 'all', label: 'All' },
                                { value: 'Fiction Books', label: 'Fiction Books' },
                                { value: 'Non-Fiction Books', label: 'Non-Fiction Books' },
                                { value: "Children's Books", label: "Children's Books" },
                                { value: 'Modern Fiction', label: 'Modern Fiction' },
                                { value: 'Romance', label: 'Romance' },
                                { value: 'Crime and Mystery', label: 'Crime and Mystery' },
                                { value: 'Thriller and Suspense', label: 'Thriller and Suspense' },
                                { value: 'Fantasy', label: 'Fantasy' },
                                { value: 'Science Fiction', label: 'Science Fiction' },
                                { value: 'Adventure', label: 'Adventure' },
                                { value: 'Historical Fiction', label: 'Historical Fiction' },
                                { value: 'Graphic novels', label: 'Graphic novels' },
                                { value: 'Classic Fiction', label: 'Classic Fiction' },
                                { value: 'Horror and ghost stories', label: 'Horror and ghost stories' },
                                { value: 'Anthologies and Short Stories', label: 'Anthologies and Short Stories' },
                                { value: 'Sagas', label: 'Sagas' },
                                { value: 'Erotic fiction', label: 'Erotic fiction' },
                                { value: 'Humanities Books', label: 'Humanities Books' },
                                { value: 'Lifestyle', label: 'Lifestyle' },
                                { value: 'Social Sciences', label: 'Social Sciences' },
                                { value: 'Literature & Literary Studies', label: 'Literature & Literary Studies' },
                                { value: 'Health and Personal Development', label: 'Health and Personal Development' },
                                { value: 'Arts Books', label: 'Arts Books' },
                                { value: 'Biography and True Stories', label: 'Biography and True Stories' },
                                { value: 'Economics and Finance', label: 'Economics and Finance' },
                                { value: 'Mathematics and Science', label: 'Mathematics and Science' },
                                { value: 'Medicine', label: 'Medicine' },
                                { value: 'Language', label: 'Language' },
                                { value: 'Computing and I.T.', label: 'Computing and I.T.' },
                                { value: 'Technology', label: 'Technology' },
                                { value: 'Law', label: 'Law' },
                                { value: 'Earth Sciences', label: 'Earth Sciences' },
                                { value: 'Reference Books', label: 'Reference Books' },
                                { value: 'English Language Teaching', label: 'English Language Teaching' },
                                { value: "Children's Fiction and True Stories", label: "Children's Fiction and True Stories" },
                                { value: 'Activity', label: 'Activity' },
                                { value: "Children's Education and Learning", label: "Children's Education and Learning" },
                                { value: "Children's Non-Fiction", label: "Children's Non-Fiction" },
                                { value: "Children's Personal and Social Issues", label: "Children's Personal and Social Issues" },
                                { value: "Children's Poetry and Anthologies", label: "Children's Poetry and Anthologies" },
                                { value: "Children's Reference Books", label: "Children's Reference Books" },
                                { value: "Stationery & miscellaneous items", label: "Stationery & miscellaneous items" }
                            ]}
                        />
                        <br />
                        <Select
                            label="Condition"
                            placeholder="Pick one"
                            value={condition}
                            onChange={setCondition}
                            data={[
                                { value: 'Good', label: 'Good' },
                                { value: 'Very Good', label: 'Very Good' },
                                { value: 'Well Read', label: 'Well Read' }
                            ]}
                        />
                        <br />
                        <Select
                            label="Binding Type"
                            placeholder="Pick one"
                            onChange={setBinding}
                            value={binding}
                            data={[
                                { value: 'Paperback', label: 'Paper Back' },
                                { value: 'Hardback', label: 'Hard Back' }
                            ]}
                        />
                        <br />
                        <Text weight={500} size="sm">Price Range</Text>
                        <Group style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.2rem', marginBottom: '1rem' }}>
                            <NumberInput
                                value={low}
                                sx={{ width: "45%" }}
                                onChange={setLow}
                                max={100}
                                min={10}
                            />

                            <NumberInput
                                value={high}
                                sx={{ width: "45%" }}
                                onChange={setHigh}
                                max={100}
                                min={10}
                            />
                        </Group>
                        <br />
                        <Group style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button color="red" variant='outline' sx={{ width: "60%" }} onClick={reset}>Reset</Button>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        {
                            isLoading === true ?
                                <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Loader></Loader>
                                    <h2 style={{ marginLeft: "0.5rem" }}>Loading ...</h2>
                                </div>
                                :
                                <Products key={books.Sku} books={filter() ? filter() : categoryFilter} />
                        }
                    </Grid.Col>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Shop;