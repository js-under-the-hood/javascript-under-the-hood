const fishData = [
    { name: "Nemo"},
    { name: "Marlin"},
    { name: "Coral"},
    { name: "Nemra"}
];

const conceptsData = [
    {
        title: "call stack",
        description: "A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run, what functions are called from within that function and should be called next, etc.",
        url: "#explanationCallStack",
    },
    {
        title: "hoisting",
        description: "Hoisting is JavaScript's default behavior of moving declarations to the top. In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared. JavaScript only hoists declarations, not initializations.",
        url: "#",
    },
    {
        title: "type conversion",
        description: "Most of the time, operators and functions automatically convert a value to the right type. That’s called “type conversion”. For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.",
        url: "#",
    },
    {
        title: "closure",
        description: "A closure is the combination of a function and the lexical environment within which that function was declared. Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data.",
        url: "#",
    }
];

const gitHubUsers = ["arturvardanyan", "vardgeshamazaspyan", "tatevgrigoryan", "martineghiazaryan", "anisargsian"];

const editorInitialCode = (
`function a() {
    b();
}

function b() {
    c();
}

function c() {
    return 1;
}

a();`
);

const socials = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fjavascript-under-the-hood%2Fjavascript-under-the-hood&amp;src=sdkpreparse",
    twitter: "https://twitter.com/intent/tweet/complete?url=https%3A%2F%2Fgithub.com%2Fjavascript-under-the-hood%2Fjavascript-under-the-hood",
    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/javascript-under-the-hood/javascript-under-the-hood",
    google: "https://plus.google.com/u/0/share?url=https://github.com/javascript-under-the-hood/javascript-under-the-hood"
};

export { fishData, conceptsData, gitHubUsers, editorInitialCode, socials };