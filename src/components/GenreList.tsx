import useGenres from '../hooks/useGenres';
import { List, ListItem,Image,Button,HStack,Spinner} from '@chakra-ui/react';
import  getCroppedImageUrl  from '../services/image-url';
import { Genre } from '../hooks/useGenres';

interface Props{
  onSelectGenre:(genre:Genre)=>void;

}

const GenreList = ({onSelectGenre}:Props) => {
  const {data,isLoading,error}= useGenres();

  if (error) return null;
  if(isLoading) return <Spinner/>
  return (
    <List pt={2}>
      {data.map(genre=> <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} borderRadius={8}/>
          <Button onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
      </ListItem> )}
    </List>
  )
}


export default GenreList;