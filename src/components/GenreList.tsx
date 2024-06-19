import useData from '../hooks/useData';
import useGenres from '../hooks/useGenres';
import { List, ListItem,Image,Text,HStack } from '@chakra-ui/react';
import  getCroppedImageUrl  from '../services/image-url';

const GenreList = () => {
  const {data}= useGenres();
  return (
    <List>
      {data.map(genre=> <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} borderRadius={8}/>
          <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
      </ListItem> )}
    </List>
  )
}


export default GenreList;