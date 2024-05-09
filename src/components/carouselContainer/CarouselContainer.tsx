import { ReactElement, useEffect, useRef, useState } from 'react'
import { CarouselDataItem } from '../../data/carouselData'
import CarouselItem from '../carouselItem/CarouselItem'
import styles from './CarouselContainer.module.css'

interface Props {
    items: CarouselDataItem[]
    visibleElementsCount: number
    itemClassName?: string
    carouselClassName?: string
}

const CarouselContainer: React.FC<Props> = ({
    items,
    visibleElementsCount,
    itemClassName = '',
    carouselClassName = '',
}) => {
    const { container } = styles

    const [visibileElements, setVisibleElements] = useState<CarouselDataItem[]>(items)
    const [currentIndex, setCurrentIndex] = useState(visibleElementsCount)
    const carouselRef = useRef<HTMLDivElement>(null)

    // set initial visible elements
    useEffect(() => {
        setVisibleElements(items.slice(0, visibleElementsCount))
    }, [items, visibleElementsCount])

    const handleScroll = (): void => {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current!

        // check if the scroll has reached the most right position
        if (scrollLeft + clientWidth === scrollWidth) {
            loadMoreItems()
        }
    }

    // load more items when the scroll reaches most right position
    const loadMoreItems = (): void => {
        const nextIndex = currentIndex + visibleElementsCount

        if (nextIndex >= items.length) {
            // add new items in the array to simulate infinite scrolling
            const newItems = items.slice(currentIndex, items.length)

            setVisibleElements((prevItems) => [...prevItems, ...newItems])

            // reduce length of the items array
            if (visibileElements.length > items.length * 2) {
                setVisibleElements(newItems)
            }
        } else {
            // load more items from the current array for perfomance optimization
            const newItems = items.slice(currentIndex, nextIndex)

            setVisibleElements((prevItems) => [...prevItems, ...newItems])
            setCurrentIndex(nextIndex)
        }
    }

    // extract items render to keep the return clean
    const renderItems = (): ReactElement[] => {
        return visibileElements.map((item: CarouselDataItem, index: number) => {
            return <CarouselItem key={index} itemClassName={itemClassName} src={item.src} />
        })
    }

    return (
        <div ref={carouselRef} className={`${carouselClassName} ${container}`} onScroll={handleScroll}>
            {renderItems()}
        </div>
    )
}

export default CarouselContainer
