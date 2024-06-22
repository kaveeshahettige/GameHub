import bullseye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.png';
import thumbsup from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
    rating:number;
}

const Emoji = ({rating}:Props) => {
    
    const emojiMap :{[key:number]:ImageProps}={
        3:{src:meh,alt:'meh'},
        4:{src:thumbsup,alt:'recommended'},
        5:{src:bullseye,alt:'exceptional'},
    }
  return (
   <Image {...emojiMap[rating]} boxSize='25px'/>
    
  )
}

export default Emoji
