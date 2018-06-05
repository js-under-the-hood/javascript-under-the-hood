export const isNotEmptyArray = array => Array.isArray(array) && array.length;

export const getArrayLastItem = (array) => {
    if (isNotEmptyArray(array)) {
        return array[array.length - 1];
    }
    return null;
};

export const getArrayWithoutLastItem = (array) => {
    if (isNotEmptyArray(array)) {
        return array.slice(0, -1);
    }
    return null;
};

export const getComponentClassName = (classNames) => {
    if (isNotEmptyArray(classNames)) {
        return classNames.join(" ").trim();
    }
    return "";
};