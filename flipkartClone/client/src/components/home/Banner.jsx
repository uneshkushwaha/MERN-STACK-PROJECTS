
import {styled} from "@mui/material";
import Carousel from 'react-multi-carousel';//to import slideshow
import 'react-multi-carousel/lib/styles.css';//to mangage the slideshow images in a single row
import { bannerData } from "../../constants/data";
//carousel is used for banner as slideshow with a group of image ,text or html element

const responsive = {
  
  laptop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 1,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};



const Image=styled('img')({
  width:'100%',
  height:280
  
})

const Banner =()=>{
    return(
        <Carousel  responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            itemAriaLabel="button"
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

  >      {

            bannerData.map(data => 
                <Image src={data.url}alt="banner" />
            )
        
        }
         
           
        </Carousel>
    )
}
export default Banner;