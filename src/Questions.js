const Questions = [
    {
        question:
        "If you want to import just the Component from the React library, what syntax do you use?",
        answers: ["import React.Component from 'react'","import [ Component ] from 'react'","import Component from 'react'","import { Component } from 'react'"],
        correct: "import { Component } from 'react'",
        questionId: "099099"
    },
    {
        question:
        "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        answers: ["Wrap it in the React.memo higher-order component.","Implement the useReducer Hook.","Implement the useMemo Hook.","Implement the shouldComponentUpdate lifecycle method."],
        correct: "Wrap it in the React.memo higher-order component.",
        questionId: "093909"
    },
    {
        question:`How do you fix the syntax error that results from running this code?
        const person =(firstName, lastName) =>
        {
            first: firstName,
            last: lastName
        }
        console.log(person("Jill", "Wilson"))
        `,
        answers: [" Wrap the object in parentheses.", "Call the function from another file.", " Add a return statement before the first curly brace", "Replace the object with an array."],
        correct: "Wrap the object in parentheses.",
        questionId: "009039"
    },
    {
        question:
        `If you see the following import in a file, what is being used for state management in the component?
        import React, {useState} from 'react';
        `,
        answers: ["React Hooks", "stateful components", "math", " class components"],
        correct: "React Hooks",
        questionId: "090089"
    },
    {
        question:
        ` Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?
        const name = 'Rachel';
        const age = 31;
        const person = { name, age };
        console.log(person);
        `,
        answers: [`{{name: "Rachel", age: 31}}`,`{name: "Rachel", age: 31}`,`{person: "Rachel", person: 31}}`,`{person: {name: "Rachel", age: 31}}`],
        correct: `{name: "Rachel", age: 31}`,
        questionId: "01010101"
    },
    {
        question:
        "What is the testing library most often associated with React?",
        answers: ["Mocha", "Chai", "Sinon", "Jest"],
        correct: "Jest",
        questionId: "092299"
    },
    {
        question:
        ` To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?
          \mconst topics = ['cooking', 'art', 'history'];

        `,
        answers: [`const first = ["cooking", "art", "history"]`,`const [] = ["cooking", "art", "history"]`,`const [, first]["cooking", "art", "history"]`, `const [first] = ["cooking", "art", "history"]`],
        correct: `const [first] = ["cooking", "art", "history"]`,
        questionId: "099099"
    },
    {
        question:
        " How do you handle passing through the component tree without having to pass props down manually at every level?",
        answers: ["React Send", "React Pinpoint", "React Router", "React Context"],
        correct: "React Context",
        questionId: "222099"
    },
    {
        question:
        `What should the console read when the following code is run?
        const [, , animal] = ['Horse', 'Mouse', 'Cat'];
        console.log(animal);

        `,
        answers: ["Horse", "Cat", "Mouse", "undefined"],
        correct: "Cat",
        questionId: "2222099"
    },
    {
        question:
        " What is the name of the tool used to take JSX and turn it into createElement calls?",
        answers: ["JSX Editor", " ReactDOM", "Browser Buddy", "Babel"],
        correct: "Babel",
        questionId: "09922099"
    }
    ];
    export default (n = 5) =>
    Promise.resolve(Questions.sort(() => 0.5 - Math.random()).slice(0, n));
    