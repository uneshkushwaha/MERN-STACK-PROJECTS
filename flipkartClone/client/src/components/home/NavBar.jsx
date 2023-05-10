
import { Box ,styled,Typography} from "@mui/material";
import { navData } from "../../constants/data";

const Component=styled(Box)`
display:flex;
margin:60px 45px 0 75px;
justify-content:space-between;
`
const Contianer=styled(Box)`
padding:3px 8px;
text-align:center;`


const ImageText=styled(Typography)`
font-size:15px;
font-weight: 550;
font-family: inherit;

`

const NavBar=()=>{
    return(
        <Component> {
            navData.map(data =>(
                //to loop the url and text
                <Contianer>
                <img src={data.url} alt="navigationbar"style={{width:64}}/>
                <ImageText>{data.text}</ImageText>

                    </Contianer>
            ))
            
            }
            </Component>
    )
}
export default NavBar;