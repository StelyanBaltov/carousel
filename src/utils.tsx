export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const calculatePercentage = (part: number, whole: number): number => {
    return +((part / whole) * 100).toFixed()
}

export const serverIdRegex = /^[^.]+/

export const escapeRegExp = (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
