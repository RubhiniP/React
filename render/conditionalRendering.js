import React from "react";

// function Student({ passed, name }) {
//         if (passed){
//             return (
//                 <li>Congrats {name}!</li>
//             );
//         }  
//         return <li>Good Try {name}</li>  
// }

const Student = ({passed, name}) => (passed) ? <li><mark>Congrats {name}</mark></li> : <li>Better Luck Next Time {name}</li>;

function PassList(){
    return (
        <section>
            <h1>RESULTS</h1>
            <ul>
                <Student 
                passed = {true}
                name = "Rubhini"
                />
                <Student
                passes = {false}
                name = "Prakash" 
                />
            </ul>
        </section>
    );
}

export default PassList;
