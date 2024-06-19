import { Text,SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const {games,error,isLoading}=useGames();

    const skeltons=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} p={6} spacing={6}>
      {isLoading && skeltons.map(s=><GameCardSkeleton key={s}/>)}
        {games.map(game=><GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
