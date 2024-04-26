var __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i)
                    ar[i] = from[i]
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from))
    }
import { jsx as _jsx } from 'react/jsx-runtime'
import { useEffect, useRef, useState } from 'react'
import CarouselItem from '../carouselItem/CarouselItem'
import styles from './CarouselContainer.module.css'
var CarouselContainer = function (_a) {
    var items = _a.items,
        visibleElementsCount = _a.visibleElementsCount,
        _b = _a.itemClassName,
        itemClassName = _b === void 0 ? '' : _b,
        _c = _a.carouselClassName,
        carouselClassName = _c === void 0 ? '' : _c
    var container = styles.container
    var _d = useState(items),
        visibileElements = _d[0],
        setVisibleElements = _d[1]
    var _e = useState(visibleElementsCount),
        currentIndex = _e[0],
        setCurrentIndex = _e[1]
    var carouselRef = useRef(null)
    // set initial visible elements
    useEffect(
        function () {
            setVisibleElements(items.slice(0, visibleElementsCount))
        },
        [items, visibleElementsCount]
    )
    var handleScroll = function () {
        var _a = carouselRef.current,
            scrollLeft = _a.scrollLeft,
            scrollWidth = _a.scrollWidth,
            clientWidth = _a.clientWidth
        // check if the scroll has reached the most right position
        if (scrollLeft + clientWidth === scrollWidth) {
            loadMoreItems()
        }
    }
    // load more items when the scroll reaches most right position
    var loadMoreItems = function () {
        var nextIndex = currentIndex + visibleElementsCount
        if (nextIndex >= items.length) {
            // add new items in the array to simulate infinite scrolling
            var endItems = items.slice(currentIndex, items.length)
            var remainingItemsCount = visibleElementsCount - endItems.length
            var startItems = items.slice(0, remainingItemsCount)
            var newItems_1 = __spreadArray(__spreadArray([], startItems, true), endItems, true)
            setVisibleElements(function (prevItems) {
                return __spreadArray(__spreadArray([], prevItems, true), newItems_1, true)
            })
            setCurrentIndex(remainingItemsCount)
            // reduce length of the items array
            if (visibileElements.length > items.length * 2) {
                setVisibleElements(newItems_1)
            }
        } else {
            // load more items from the current array for perfomance optimization
            var newItems_2 = items.slice(currentIndex, nextIndex)
            setVisibleElements(function (prevItems) {
                return __spreadArray(__spreadArray([], prevItems, true), newItems_2, true)
            })
            setCurrentIndex(nextIndex)
        }
    }
    // extract items render to keep the return clean
    var renderItems = function () {
        return visibileElements.map(function (item, index) {
            return _jsx(CarouselItem, { itemClassName: itemClassName, src: item.src }, index)
        })
    }
    return _jsx('div', {
        ref: carouselRef,
        className: ''.concat(carouselClassName, ' ').concat(container),
        onScroll: handleScroll,
        children: renderItems(),
    })
}
export default CarouselContainer
