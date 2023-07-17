import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Callback(){

    const [age, SetAge] = useState(20);
    const [salary, SetSalary] = useState(50000);

    const IncrementAge = useCallback(() => {
        SetAge(age + 1);
    }, [age]);

    const IncrementSalary = useCallback(() => {
        SetSalary(salary + 10000);
    }, [salary]);

    return(
        <div>
            <Title />
            <Count text="Age" count={age}/>
            <Button handleClick={IncrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={IncrementSalary}>Increment salary</Button>
        </div>
    )



}

export default Callback;