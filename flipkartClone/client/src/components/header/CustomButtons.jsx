import { Box,Button,Typography,styled} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
//Components

const ButtonWrappers=styled(Box)`
display:flex;
margin:0 1% 0 auto;
& >button,& >p,& > div {
    margin-right:50px;
    font-size:15px;
    align-items:center;
}`

const CartContainer=styled(Box)`
display:flex;
font-Weight:1000;
font-size:15px;
margin-bottom:13px;
`


const LoginButton=styled(Button)`
color:#A3007A;

background:#ffffff;
text-transform:none;
// by default materialui css text is uppercase
padding:5px 55px 5px;
border-radius:3px;
margin:5px 5px 20px 35px;
box-shadow:none;
font-weight:550;
height:30px;
width:15%;

`


const CustomButtons=()=>{
    return(
        <ButtonWrappers>
           <LoginButton variant="contained">Login</LoginButton>
           <Typography style={{marginTop:10,width:130,fontWeight:600}}>Become a Seller</Typography>
           <Typography style={{marginTop:10,fontWeight:600}}>More</Typography>
          
           <CartContainer>

            <ShoppingCart/>
            <Typography style={{fontWeight:600}}>Cart</Typography>
           </CartContainer>
        </ButtonWrappers>
    )
}
export default CustomButtons;