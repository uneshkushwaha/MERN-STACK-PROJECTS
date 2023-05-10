import { InputBase ,Box,styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
background:#fff;
border-radius: 2px;
margin-left: 10px;
width: 40%;
display: flex;
margin-bottom:15px;
`;
const InputSearchBase=styled(InputBase)`
padding-left:15px;
width:100%;
color:#008000;



`

const SearchIconWrapper = styled(Box)`
  
  margin-right:10px;
  margin-top:5px;
 color:#808080;
 


`;


const Search =()=>{
    return(
        <SearchContainer>
        <InputSearchBase
        placeholder="Search for products,brands and more"
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        </SearchContainer>

    )
}
export default Search; 