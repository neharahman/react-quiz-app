import React, {useState} from "react";
import './Main.css';
import Button from '@mui/material/Button';
import { Card } from "@mui/material";
const Main = () =>{
    
    const [count,setCount] = useState(0);
    function check(e)
    {
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.name === e.target.value)
        {
            console.log('true');
            setCount(count+1);
        }
        else
        {
            console.log('false');
        }
        
    }
    function submit1()
    {
        alert('test completed scored '+count);
    }
    return(
        <>
        
    	    <button type="button" onClick={submit1}>Submit</button>
            <Card className="card1 mt-5"> 
            <h5 className="pt-5">Hey Test your knowledge with us</h5>
            <h6>Start the quiz</h6>
            <Button className="mt-5"  variant="contained">
                Start<div className="abc"> </div>
            </Button>
            </Card> 
            <br></br>
        </>
    )
}
export default Main;