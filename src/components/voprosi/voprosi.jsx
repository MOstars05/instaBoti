import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, filter, Heading } from '@chakra-ui/react'
import React from 'react'

const Voprosi = () => {
  return (
    <Box flexWrap={"wrap"}>
        <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
            <Heading marginLeft={8}  fontSize={{base: "18", sm: "30", md: "36"}}>Часто задаваемые вопросы</Heading>
            <Box>
                <Accordion defaultIndex={[0]} allowMultiple display={"flex"} flexDirection={"column"} gap={4}>
                    <AccordionItem rounded={15} padding={'2'}>
                            <h2>
                        <AccordionButton>
                            <Box as="span" fontSize={'30px'} flex='1' textAlign='left'>
                                Первый вопрос
                            </Box>
                        <AccordionIcon fontSize={{base: "23px", sm: '28px'}} />
                    </AccordionButton>
                            </h2>
                        <AccordionPanel pb={4} color={"#808080"} fontSize={{base: "15px", sm: "18px"}}>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. 
                        </AccordionPanel>
                     </AccordionItem>

                        <AccordionItem style={{boxShadow: '-1px 1px 5px'}} rounded={15} padding={'2'}>
                                {({ isExpanded }) => (
                                <>
                                <h2>
                            <AccordionButton>
                                <Box as="span" fontSize={'30px'} flex='1' textAlign='left'>
                                    Второй вопрос
                                </Box>
                                        {isExpanded ? (
                                    <MinusIcon fontSize={{base: '13px', sm: "15px"}} />
                                        ) : (
                                    <AddIcon fontSize={{base: '13px', sm: "15px"}} />
                                        )}
                            </AccordionButton>
                                    </h2>
                                <AccordionPanel pb={4} color={"#808080"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. .
                                </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem style={{boxShadow: '-1px 1px 5px'}} rounded={15} padding={'2'}>
                                {({ isExpanded }) => (
                                <>
                                <h2>
                            <AccordionButton>
                                <Box as="span" fontSize={'30px'} flex='1' textAlign='left'>
                                    Третий вопрос
                                </Box>
                                        {isExpanded ? (
                                    <MinusIcon fontSize={{base: '13px', sm: "15px"}}  />
                                        ) : (
                                    <AddIcon fontSize={{base: '13px', sm: "15px"}}  />
                                        )}
                            </AccordionButton>
                                        </h2>
                                    <AccordionPanel pb={4} color={"#808080"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. .
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem style={{boxShadow: '-1px 1px 5px'}} rounded={15} padding={'2'}>
                                {({ isExpanded }) => (
                                <>
                                <h2>
                            <AccordionButton>
                                <Box as="span" fontSize={'30px'} flex='1' textAlign='left'>
                                    Четвертый вопрос
                                </Box>
                                        {isExpanded ? (
                                    <MinusIcon fontSize={{base: '13px', sm: "15px"}}  />
                                        ) : (
                                    <AddIcon fontSize={{base: '13px', sm: "15px"}}  />
                                        )}
                                    </AccordionButton>
                                        </h2>
                            <AccordionPanel pb={4} color={"#808080"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mi aliquet eu interdum eu pellentesque amet, fermentum hendrerit. Nunc hendrerit nec risus adipiscing lacus, lobortis lectus cursus nunc. Id pellentesque dapibus eu tincidunt dui id tortor, porttitor. Tincidunt nunc praesent euismod in nisl, tellus suspendisse morbi nam. Egestas eget erat malesuada gravida. Et enim integer quam orci, cursus tincidunt mauris, sit. .
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    </Box>
  )
}

export default Voprosi