import { Text,SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props{
  selectedGenre:Genre | null;
}

const GameGrid = ({selectedGenre}:Props) => {
    const {data,error,isLoading}=useGames(selectedGenre);

    const skeltons=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} p={1} spacing={3}>
      {isLoading && skeltons.map(s=>
      <GameCardContainer key={s}>
      <GameCardSkeleton />
      </GameCardContainer>
      )}
        {data.map(data=>
        <GameCardContainer key={data.id}>
        <GameCard game={data}/>
        </GameCardContainer>
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
