import { Box, Heading, Text } from '@chakra-ui/react'

const Stikers = ({title , paragraph}) => {
  return (
    <Box margin={8}>
        <Box display={"flex"} flexDirection={"column"} gap={20}>
            <Box>
            <Box  >
              <Box>
                <Heading as='h4' size='md'>{title}</Heading>
                <Text>{paragraph}</Text>
             </Box>
            </Box>
        </Box>
        </Box>
        
    </Box>
  )
}

export default Stikers