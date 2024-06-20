import { Card,CardBody,Skeleton,SkeletonText} from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <div>
        <Card borderRadius={10} overflow="hidden" width='300px'>
            <Skeleton height="200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
      
    </div>
  )
}

export default GameCardSkeleton
