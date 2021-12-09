import { Divider,Stack } from '@chakra-ui/react'
import React from 'react'
import { Product } from '~/product/types'
import Count from './Count'
import { Filter } from './types'

interface Props {
  products: Product[]
}

const ProductsList:React.FC <Props>=({products}) => {

  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent)
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
        <Count current={products.length} total={products.length}></Count>
      
      </Stack>
    </Stack>
  )
}

export default ProductsList
