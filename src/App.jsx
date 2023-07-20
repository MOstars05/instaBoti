import { ArrowUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Header from './components/header/header'
import Phone from './components/phone/phone'
import Premushestva from './components/premushestva/premushestva'
import Sale from './components/sale/sale'
import Svyaz from './components/svyaz/svyaz'
import TarifiTitles from './components/tarifiTitles/tarifiTitles'
import Voprosi from './components/voprosi/voprosi'

function App() {
 


  return (
    <Box maxWidth={'1278px'} mx={'auto'}>
      <Box margin={8} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} gap={5} alignItems={"center"}>
          <Box fontSize={18} color={"#4754EB"} display={{base: "block", lg: "none"}}>
            <HamburgerIcon/>
          </Box>
          <Box>
            <Heading color={"#4754EB"} fontSize={18}>Инстаботы</Heading>
          </Box>
        </Box>
        <Box display={{base: "none", lg: "block"}}>
         <Box display={"flex"} gap={7} color={"#808080"} fontSize={18} _hover={{color: "#4754EB"}}>
            <Link>О компании</Link>
            <Link>Тарифы</Link>
            <Link>Отзывы</Link>
            <Link>Q&A</Link>
            <Link>Обратная связь</Link>
         </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={5}>
          <Box display={{base: "none", md: "block"}}>
            <Box display={"flex"}>
              <Heading  fontSize={18} _hover={{color: "#808080" }}>Ru</Heading>
              <Heading  fontSize={18} color={"#808080"} _hover={{color: "black"}}>/En</Heading>
            </Box>
          </Box>
          <Box fontSize={{base: "10", sm: "18"}} display={{base: "none", sm: "block"}}>
            <Button bgColor={"#4754EB"} color={"#FFFFFF"} fontSize={{base: "10", sm: "15", md: "18"}}>Вход и регистрация</Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Header />
      </Box>

      <Box>
        <Premushestva />
      </Box>

      <Box>
        <Phone />
      </Box>
      
      <Box>
        <TarifiTitles />
      </Box>

      <Box>
        <Sale />
      </Box>

      <Box>
        <Voprosi />
      </Box>

      <Box>
        <Svyaz />
      </Box>
      
      
        
      











      <Box margin={1} >
        <Box padding={8} bg={"#4754EB"} display={"flex"} justifyContent={"space-between"} roundedBottomLeft={30} roundedBottomRight={30} flexWrap={"wrap"}>
          <Box display={"flex"} flexDirection={"column"} gap={5} color={"#fff"}>
            <Heading fontSize={{base: "14", sm: "16", md: "18"}}>Инстаботы</Heading>
            <Heading fontSize={{base: "12", sm: "16", md: "18"}}>© 2021 Copyright reserved <br />Instabots</Heading>
          </Box>
          <Box display={"flex"} gap={{base: "1", sm: "3", md: "5"}} alignItems={"center"} color={"#fff"}>
            <Box>
                <Heading fontSize={{base: "16", md: "18"}} display={{base: "none", sm: "block"}}>Вернуться наверх</Heading>
                <Heading fontSize={"14"} display={{base: "block", sm: "none"}}> Наверх</Heading>
            </Box>
            <Box fontSize={20}>
                <ArrowUpIcon/>
            </Box>
          </Box>
        </Box>
      </Box>











    </Box>
  )
}

export default App
