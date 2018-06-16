import * as Babel from "babel-standalone";

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

export const getCodeES5 = (code) => {
    return (
        Babel.transform(code, {
            plugins: [
                "transform-es2015-arrow-functions",
                "transform-es2015-block-scoped-functions",
                "transform-es2015-block-scoping",
                "transform-es2015-classes",
                "transform-es2015-destructuring",
                "transform-es2015-function-name",
                "transform-es2015-parameters",
                "transform-es2015-template-literals",
            ]
        }).code
    );
};

export const UNSAFE_deepCopy = object => JSON.parse(JSON.stringify(object));

export const getCurrentCallStackItemEnter = (callStack, callStackItemID, callStackItemName) => {
    if (callStackItemName.substr(0, 6) === "$$ANON") {
        callStackItemName = "anonymous";
    }
    const currentCallStackItem = [];
    if (callStack.length > 0) {
        const prevCallStackItems = [...callStack[callStack.length - 1]]
        prevCallStackItems.map(val => currentCallStackItem.push(val));
    }
    currentCallStackItem.push({
        id: callStackItemID,
        value: callStackItemName + "()",
    });
    return currentCallStackItem;
};

export const getCurrentCallStackItemLeave = (callStack) => {
    const prevCallStackItems = [...callStack[callStack.length - 1]];
    prevCallStackItems.pop();
    return prevCallStackItems;
};