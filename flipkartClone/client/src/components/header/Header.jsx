
import {AppBar,Toolbar,styled,Box, Typography} from '@mui/material';
// div is repalced by Box and <p> is replaced by typography in react

//components

import Search from '../Search';
import CustomButtons from './CustomButtons';

const StyledAppBar=styled(AppBar)`
background:#A3007A;
height:50px;
`
const Component=styled(Box)`
margin-left:12%;
line-height:0;
`
const Subheading=styled(Typography)`
font-size:10px;
font-style:italic;
margin-bottom:45
`
const PlusImage=styled('img')({
    // others are react component so,react is well known that where these are coming from but img is html tag .so we have to put in the string
    width:10,
    height:10,
    marginLeft:4,
}

)

const CustomButtonsWrapper=styled(Box)`
margin:0 0% 0 auto `




const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledAppBar>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt="flipkartLogo" style={{width:70,marginBottom:4  }}/>
                    {/* one curly braces for variable and two curly braces for object.if you put css in object then it is camelcase
                     .But when you put css in style tag then it is in lower case */}
                    <Box style={{display:'flex'}}>
                    <Subheading >Explore&nbsp;
                        {/* &nbsp creates space */}
                            <Box component="span" style={{color:'#FFE500',fontWeight:560}}> Plus</Box>
                            
                        </Subheading>
                        <PlusImage src={subURL} alt="plusLogo" />

                        </Box> 
                </Component>
                <Search/ >

                <CustomButtonsWrapper>
                    {/* This box is created for login to apply css */}
                    <CustomButtons/>
                </CustomButtonsWrapper>

            </Toolbar>
        </StyledAppBar>
    ) 
}
export default Header;