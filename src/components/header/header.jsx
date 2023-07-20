import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { raketa } from '../../assets'

const Header = () => {
    const [Отправить, setОтправить] = React.useState(false)
    const handleClick = () => setОтправить(!Отправить)
  return (
    <Box margin={8}>
        <Box display={{base: "block", lg: "flex"}}justifyContent={"space-between"}>
            <Box display={"flex"} flexDir={"column"} gap={50} marginTop={50}>
                <Heading fontSize={{base: "17", sm: "40", md: "50", lg: "34"}}>Высокий уровень <br /> вовлечения <br /> представителей</Heading>
                <InputGroup size='md'>
                <Input
                pr='4.5rem'
                type={Отправить ? 'text' : 'password'}
                placeholder='Введите свой e-mail'
                fontSize={{base: "8", md: "15"}}
                borderColor={"black"}
                />
                <InputRightElement width='5rem'>
                <Button style={{background: "#4754EB", color: "white"}}  h='1.75rem' size='sm' fontSize={{base: "10", md: "14"}} onClick={handleClick}>
                {Отправить ? 'Cкрывать' : 'Отправить'}
                </Button>
                </InputRightElement>
                </InputGroup>
                <Heading fontSize={{base: "9", sm: "13", md: "15", lg: "12"}}>Нажимая на кнопку вы соглашаетесь на обработку <br /> персональных данных </Heading>
                <Box marginTop={{base: "5", lg: "40"}} display={"flex"} gap={5}>
                  <Heading fontSize={{base: "10", md: "12", lg: "14"}}>Листайте дальше</Heading>
                  <ArrowDownIcon/>
                </Box>
            </Box>
            
            <Box width={{base: "400", md: "500", lg: "628"}}>
              <img src={raketa} alt="" />
            </Box>
        </Box>
    </Box>
  )
}

export default Header