import styles from './App.module.css'
import { CarouselContainer } from './components'
import { carouselData } from './data/carouselData'

const App: React.FC = () => {
    const { container, carousel, item, bigContainer } = styles

    return (
        <div className={container}>
            <CarouselContainer items={carouselData} carouselClassName={carousel} visibleElementsCount={5} />
            <CarouselContainer
                items={carouselData}
                carouselClassName={bigContainer}
                visibleElementsCount={10}
                itemClassName={item}
            />
        </div>
    )
}

export default App
