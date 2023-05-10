
//components
import NavBar from './NavBar';
import Banner from './Banner';
import { Box,styled } from '@mui/material';

const Boxpadding=styled(Box)`
padding:10px ;
background-color:#808080
;
`

const Home=()=>{
    return(
        <>
            <NavBar/>
            <Boxpadding>

        <Banner/>
            </Boxpadding>
        </>
          

    )
}
export default Home;