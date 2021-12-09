import React from 'react';
import { Product } from '~/product/types';
import api from '~/product/api';
import header from '~/assets/header.png'

import {Flex, Heading,Stack, CircularProgress } from '@chakra-ui/react';
import ProductsList from '~/product/component/ProductList';
const HomeScreen: React.FC = () => {
    const [products, setProduct] = React.useState<Product[]>([])
    const [status, setStatus] = React.useState<"pending"|"resolved"|"rejected">("pending")
    React.useEffect(() => {
        api.list().then((products) => {
            setProduct(products);
            setStatus("resolved");
        })
       
    }, [])


    if(status === "pending") {
        return (<Flex alignItems="center" justifyItems="center" paddingY={12}>
            <CircularProgress isIndeterminate color="primary.500"></CircularProgress>
        </Flex>);
    }
    return (
        <Stack flex={1} spacing={6}>
            <Flex alignItems="flex-end" backgroundImage={header} backgroundSize="cover" borderRadius="md" justifyContent="flex-start" minHeight={64}>
                <Heading color="white" fontSize="4xl">
                    Electronics
                </Heading>
            </Flex>
            <ProductsList products={products}></ProductsList>
        </Stack>
    );
}


export default HomeScreen;