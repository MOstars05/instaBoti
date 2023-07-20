import { Box, Heading, Input, InputGroup, InputRightElement, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { sale } from '../../assets'

const Sale = () => {
    const [Отправить, setОтправить] = React.useState(false)
    const handleClick = () => setОтправить(!Отправить)
  return (
    <Box margin={8} display={{base: "block", lg: "flex"}} alignItems={"center"} gap={40} >
        <Box width={{base: "400", md: "500", lg: "628"}}>
            <img src={sale} alt="" />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={20}>
            <Heading fontSize={{base: "17", sm: "40", md: "50", lg: "34"}}>Получите самую <br /> выгодную цену <br />на планете</Heading>
            <InputGroup size='md'>
                <Input
                pr='4.5rem'
                type={Отправить ? 'text' : 'password'}
                placeholder='Введите свой e-mail'
                fontSize={{base: "8", md: "15"}}
                borderColor={"black"}
                />
                <InputRightElement width='5rem'>
                <Button style={{background: "#4754EB", color: "white"}} color={"#4754EB"} h='1.75rem' size='sm' fontSize={{base: "10", md: "14"}} onClick={handleClick}>
                {Отправить ? 'Cкрывать' : 'Отправить'}
                </Button>
                </InputRightElement>
                </InputGroup>
                <Text fontSize={{base: "12", sm: "15", md: "16"}}>Нажимая на кнопку вы соглашаетесь на обработку <br /> <span style={{color: "#505DEC"}}>персональных данных</span></Text>
        </Box>
    </Box>
  )
}

export default Sale