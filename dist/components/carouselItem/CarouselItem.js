import { jsx as _jsx } from 'react/jsx-runtime'
import styles from './CarouselItem.module.css'
var CarouselItem = function (_a) {
    var src = _a.src,
        _b = _a.itemClassName,
        itemClassName = _b === void 0 ? '' : _b
    var container = styles.container,
        item = styles.item
    return _jsx('div', {
        className: container,
        children: _jsx('img', { className: ''.concat(itemClassName, ' ').concat(item), src: src, alt: '' }),
    })
}
export default CarouselItem
