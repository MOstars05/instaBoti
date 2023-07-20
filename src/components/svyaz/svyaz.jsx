import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Svyaz = () => {

  const [email , setEmail] = useState('')

  const [phone , setPhone] = useState('')
  const [nikName , setNikName] = useState('')
  const [message , setMessage] = useState('')
  const TOKEN = '6216727547:AAGq1hPqF8dQRRx96xORTiVV-H3Iy0IaUjI'
  const handletleSubmit = () => {

    let mess = `Haber keldi:\n`
    mess += `email: ${email}\n`
    mess += `phone: ${phone}\n`
    mess += `nikName: ${nikName}\n`
    mess += `message: ${message}`


    axios.post('https://api.telegram.org/bot' + TOKEN + '/sendMessage' , {
      chat_id: '-1001823345277',
      parse_mode: 'html',
      text: mess
    })

    setEmail(''),setPhone(''),setNikName(''),setMessage('')


  }

  return (
    <Box marginTop={20} flexWrap={"wrap"}>
        <Box display={"flex"} flexDirection={"column"} gap={'20px'}>
            <Heading fontSize={{base: "17", sm: "40", md: "36"}}>Обратная связь</Heading>
            <Text maxWidth={'465px'}>Поговорите с одним из наших сотрудников, чтобы узнать, сколько мы можем получить для вас целевой аудитории за месяц с минимальными усилиями с вашей стороны</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Введите свой e-mail' style={{background: "#F2F2F2"}} py={'30px'} px={'20px'} borderRadius={'17px'} />
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Номер мобильного телефона' style={{background: "#F2F2F2"}} py={'30px'} px={'20px'} borderRadius={'17px'} />
            <Input value={nikName} onChange={(e) => setNikName(e.target.value)} placeholder='Никнейм в Instagram' style={{background: "#F2F2F2"}} py={'30px'} px={'20px'} borderRadius={'17px'} />
            <Input value={message} onChange={e => setMessage(e.target.value)}  placeholder='Что вы бы хотели спросить о росте в Instagram' style={{background: "#F2F2F2"}} py={'30px'} px={'20px'} borderRadius={'17px'} />
            <Box display={{base: "block", md: "flex"}} gap={'30px'}>
                <Button bgColor={"#4754EB"} color={"#FFFFFF"} fontSize={{base: "10", sm: "17"}} onClick={handletleSubmit}>Отправить заявкук</Button>
                <Text>Нажимая на кнопку вы соглашаетесь на обработку <br /> <span style={{color: "#4754EB"}}>персональных данных</span></Text>
            </Box>
        
        </Box>

        <Box>

        </Box>
    </Box>
  )
}

export default Svyaz