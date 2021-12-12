import { Divider,Stack } from '@chakra-ui/react'
import React from 'react'
import { Product } from '~/product/types'
import Count from './Count'
import Filters from './Filters'
import Grid from './Grid'
import { Filter } from './types'

interface Props {
  products: Product[]
}

const ProductsList:React.FC <Props>=({products}) => {

  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent)
  const filteredProducts = React.useMemo(()=>{
    switch (filter){
      case Filter.HighestPrice:{
        return[...products].sort((a,b)=>b.cost- a.cost);
      }
      case Filter.LowestPrice:{
        return[...products].sort((a,b)=>a.cost- b.cost);
      }
      case Filter.MostRecent:default:{
        return products;
      }
     
    }
  },[filter,products]);
  return (
    <Stack alignItems='flex-start' spacing={6}>
      <Stack
        alignItems='center'
        as='nav'
        direction='row'
        divider={<Divider borderColor="gray.300" height={12} orientation="vertical"></Divider>}
        flex={1}
        spacing={6}
      width="100%"
      >  
           <Count current={filteredProducts.length} total={products.length}></Count>
      <Filters active={filter} onChange={setFilter}></Filters>
      
      </Stack>
     <Grid products={filteredProducts}/>
      <Count current={filteredProducts.length} total={products.length}></Count>
    
    </Stack>
  )
}

export default ProductsList
