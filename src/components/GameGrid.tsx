import { Text,SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const {data,error,isLoading}=useGames();

    const skeltons=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} p={6} spacing={6}>
      {isLoading && skeltons.map(s=>
      <GameCardContainer>
      <GameCardSkeleton key={s}/>
      </GameCardContainer>
      )}
        {data.map(data=>
        <GameCardContainer>
        <GameCard key={data.id} game={data}/>
        </GameCardContainer>
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
