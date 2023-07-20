import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'

const Tarifi = ({hed , price , check , paragraph , paragraphh , closeCheck , btn}) => {
  return (
    <Box margin={8}>
        <Box marginTop={20}>
            <Box display={'flex'} flexDirection={'column'} gap={5}>
               <Box>
                    <Heading as='h4' size='md'>{hed}</Heading>
                    <span>{price}</span>
               </Box>

               <Box display={'flex'} alignItems={'flex-start'} gap={3}>
                    <span style={{color: 'blue'}}>{check}</span>
                    <Text maxWidth={'200px'} color={'gray.500'}>{paragraph}</Text>
               </Box>
               <Box display={'flex'} alignItems={'flex-start'} gap={3}>
                    <span style={{color: 'red'}}>{closeCheck}</span>
                    <Text maxWidth={'200px'} color={'gray.500'}>{paragraphh}</Text>
               </Box>
               <Box display={'flex'} alignItems={'flex-start'} gap={3}>
                    <span style={{color: 'red'}}>{closeCheck}</span>
                    <Text maxWidth={'200px'} color={'gray.500'}>{paragraphh}</Text>
               </Box>
               <Box display={'flex'} alignItems={'flex-start'} gap={3}>
                    <span style={{color: 'red'}}>{closeCheck}</span>
                    <Text maxWidth={'200px'} color={'gray.500'}>{paragraph}</Text>
               </Box>
               <Box>
                    <Button color={'blue'}>{btn}</Button>
               </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Tarifi