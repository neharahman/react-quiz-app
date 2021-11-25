import React, {useState} from "react";
import './Main.css';
import Button from '@mui/material/Button';
import { Card } from "@mui/material";
const QuestionCard = () =>
{
    const [count,setCount]=useState(0);
    const [score,setScore]=useState(0);
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
        }
    ]
    const increment = () =>{
        setCount(count+1)
    }
    const check = (event) =>
    {
        let current_value=event.target.value;
        console.log(current_value);
        if(current_value==Questions[count].correct)
        {
            setScore(score+1);
            console.log('correct')
        }
        else
        {
           console.log('incorrect')
        }
    }
    const result = () => {
        alert(`your score is ${score}`)
        window.location.reload();
    }
    return(
        <>
        <div className="col-sm-12">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <Card className="card1 p-5 m-3">
                        <span className="h6">{count+1}.{Questions[count].question}</span>
                        <div className="row">
                        <div className="col-12">
                            <ol className="h6">
                            {Questions[count].answers.map((res,index)=>{
                                return<li className="m-1" style={{float:"left"}}><Button value={res} onClick={check} key={index}className="" variant="outlined">{res}</Button></li>
                            })}
                            </ol>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12 text-center mt-3">
                            {count+1==Questions.length? <Button onClick={result}className="" variant="contained">Submit</Button> :<Button className="" variant="contained" onClick={increment}>Next</Button>} 
                        </div>
                        </div>
                    </Card> 
                </div>
            </div>
        </div>
        </>
    )
}
export default QuestionCard;