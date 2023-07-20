import { Box, Button, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import { phone } from '../../assets'

const Phone = () => {
  return (
    <Box margin={8}>
        <Box>
            <Box>
                <Heading>Как мы работаем</Heading>
            </Box>
            <Box display={ { base: "block", lg: "flex"}} marginTop={20} gap={{md: "0", lg: "40"}}>
                <Box width={{base: "400", md: "500", lg: "628"}}>
                    <img src={phone} alt="" />
                </Box>
                <Box display={{base: "block", lg: "flex"}} flexDirection={"column"} gap={10}>
                   <Box display={"flex"} flexDirection={"column"} gap={10}>
                   <Box display={"flex"} gap={"7"} marginTop={8}>
                        <Box>
                            <Text fontSize={{base: "10", sm: "14"}} color={"#4754EB"}>Lorem ipsum</Text>
                        </Box>
                        <Box>
                            <Text fontSize={{base: "10", sm: "14"}}>Lorem ipsum</Text>
                        </Box>
                        <Box>
                            <Text fontSize={{base: "10", sm: "14"}}>Lorem ipsum</Text>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Heading fontSize={{md: "25"}}>Lorem ipsum dolor sit amet, <br /> consectetur.</Heading>
                    </Box>
                    <Box>
                        <Text color={"#4754EB"} fontSize={{base: "12", sm: "18"}}>Semper sollicitudin ut cursus nunc eu ultricies.</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                        <Text maxWidth={"400px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Posuere lorem nulla tincidunt egestas nibh. Non orci, et <br />  massa sed vulputate proin. Eu euismod diam, arcu sit vitae <br />  nam. Tristique orci, ornare sit vel amet.</Text>
                        <Text maxWidth={"400px"} >Ut elit dui iaculis malesuada in auctor dui. Sollicitudin <br /> varius vitae ut vitae lacus, sem dolor fermentum enim. <br />  Orci orci interdum pretium adipiscing augue sit nisl <br />  adipiscing.</Text>
                    </Box>
                    <Box>
                        <Button bgColor={"#4754EB"} color={"#FFFFFF"} fontSize={{base: "10", sm: "17"}}>Забронировать звонок</Button>
                    </Box>
                   </Box>
                </Box>

            </Box>
        </Box>
    </Box>
  )
}

export default Phone