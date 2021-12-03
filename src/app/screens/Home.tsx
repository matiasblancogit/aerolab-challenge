import React from 'react';
import { Product } from '~/product/types';
import api from '~/product/api';
import { Flex } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/react';
const HomeScreen: React.FC = () => {
    const [product, setProduct] = React.useState<Product[]>([])
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
    return (<div>{'<HomeScreen/>'}</div>);
}


export default HomeScreen;