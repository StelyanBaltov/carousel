export var capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
export var calculatePercentage = function (part, whole) {
    return +((part / whole) * 100).toFixed();
};
export var serverIdRegex = /^[^.]+/;
export var escapeRegExp = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
