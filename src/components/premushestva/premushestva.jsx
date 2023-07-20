import { Box, Heading } from '@chakra-ui/react'
import Stikers from '../stikers/stikers'

const Premushestva = () => {
  return (
    <Box>
        <Box>
          <Heading fontSize={{base: "15", sm: "26"}} marginLeft={'30px'}>Наши преимущества</Heading>
        </Box>
        <Box display={{ base: "block", lg: "flex"}} gap={5}>
          <Stikers title={'🥸Легко и просто'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.'} />
          <Stikers title={'😜Быстро и доступно'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.'} />
          <Stikers title={'😎А главное, качественно'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.'} />
        </Box>
    </Box>
  )
}

export default Premushestva