import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'
import Tarifi from '../tarifi/tarifi'
const TarifiTitles = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
        <Box marginLeft={8}>
            <Heading>Наши тарифы</Heading> 
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
           <Box display={'flex'} gap={'40px'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                <Tarifi hed={'Эконом'} price={'2 990 руб/месяц'} check={< CheckIcon />} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio'} closeCheck={<CloseIcon />} paragraphh={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} btn={'Узнать подробнее'}  />
                <Tarifi hed={'Стандарт'} price={'4 990 руб/месяц'} check={< CheckIcon />} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.'} closeCheck={<CloseIcon />} paragraphh={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} btn={'Узнать подробнее'} />
           </Box>
            <Box display={'flex'} gap={'40px'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                <Tarifi hed={'Экстра'} price={'8 990 руб/месяц'} check={< CheckIcon />} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.'} closeCheck={<CloseIcon />} paragraphh={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} btn={'Узнать подробнее'} />
                <Tarifi hed={'Премиальный'} price={'12 990 руб/месяц'} check={< CheckIcon />} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.'} closeCheck={<CloseIcon />} paragraphh={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} btn={'Узнать подробнее'} />
            </Box>
        </Box>

    </Box>
  )
}

export default TarifiTitles