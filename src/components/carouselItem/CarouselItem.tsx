import styles from './CarouselItem.module.css'

interface Props {
    src: string
    itemClassName?: string
}

const CarouselItem: React.FC<Props> = ({ src, itemClassName = '' }) => {
    const { container, item } = styles

    return (
        <div className={container}>
            <img className={`${itemClassName} ${item}`} src={src} alt='' />
        </div>
    )
}

export default CarouselItem
