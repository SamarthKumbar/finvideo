import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Button,
    useDisclosure,
    DrawerHeader,
    DrawerCloseButton,
    VStack,
    HStack}
 from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi";
import logo from '../Assets/f1.jpg';

const buttonStyle = {
  backgroundColor: 'white', /* Green */
        border: '5px solid black', /* Green border */
        color: 'purple',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '15px',
        lineHeight: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};
const buttonStyle1= {
  backgroundColor: 'black', 
        border: '4px solid black', 
        color: 'orange',
        padding: '10px 20px',
        textAlign: 'center',
        
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
    <Button
     zIndex={'overlay'}
     pos={'fixed'} 
    top={'4'} 
    left={'4'} 
    colorScheme={'whatsapp'} 
    p={"0"} 
    w={"10"} 
    h={"10"} 
    borderRadius={"full"}
    onClick={onOpen}
    >
        <BiMenuAltLeft />
    </Button>

    <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay/>

    <DrawerContent>
        <DrawerCloseButton/>
    <DrawerHeader style={buttonStyle1}>
    FINVIDEO STORE
    
    </DrawerHeader>
    <DrawerBody>
        <VStack alignItems={'flex-start'} >
        <Button onClick={onClose} style={buttonStyle}>
            <Link to="/">Home</Link>
        </Button>

            <Button onClick={onClose}
              style={buttonStyle}>
            <Link to= {"./youtube"}>Sample Youtube Videos</Link>
            </Button>

            <Button onClick={onClose}style={buttonStyle}>
            <Link to= {"./Videos?category=free"}>FreeVideos</Link>
            </Button>

            <Button onClick={onClose}style={buttonStyle}>
             
            <Link to= {"./Upload"}>Upload</Link>
            </Button>


            <img src={logo} alt="Logo" 
            style={{ width: "300px",
             margin: "auto", 
             display: "block" ,
             marginTop:"70px", 
             borderRadius:"30px", 
             border: '7px solid green'}} />

          
        </VStack>

        <HStack pos={'absolute'} bottom={'10'} left={'0'} colorScheme={'purple'} w={"full"}  justifyContent={"space-evenly"}>
            <Button style={buttonStyle}> 
              <Link to={"./Login"}>LogIn</Link>
            </Button>
            <Button style={buttonStyle}> 
            <Link to={"./signup"}>SignUp</Link>
            </Button>
        </HStack>
    </DrawerBody>
    </DrawerContent>
        
    
    </Drawer>
    </>
    
  )
}

export default Header