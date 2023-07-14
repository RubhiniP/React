import React from "react";

// function Student({ passed, name }) {
//         if (passed){
//             return (
//                 <li>Congrats {name}!</li>
//             );
//         }  
//         return <li>Good Try {name}</li>  
// }

const StudentT = ({passed, name}) => (passed) ? <li><mark>Congrats {name}</mark></li> : <li>Better Luck Next Time {name}</li>;

function PassList(){
    return (
        <section>
            <hr />
            <h2>RESULTS DISPLAYED USING CONDITIONAL RENDERING - USING TERNARY OPERATIOR ? :</h2>
            <ul>
                <StudentT
                passed = {true}
                name = "Rubhini"
                />
                <StudentT
                passes = {false}
                name = "Prakash" 
                />
            </ul>
            <hr />
        </section>
    );
}

function LogicalRendering(){

    function StudentL(props){
        return(
            <div>
            {props.name} 
            {props.passed && ' - Selected'}
            </div>
        );
    }

    return(
        <div>
            <h2>CONDITIONAL RENDERING USING LOGICAL OPERATOR &&</h2>
            <StudentL 
            passed={true}
            name="Rohini"/>

            <StudentL 
            passed={false}
            name="Devika"/>
            <hr />
        </div>
    );
}

function RenderingJSX(){

    function StudentJ(props){
        let studentName = props.name;
        if(props.passed){
            studentName = props.name + "'~'"; 
        }
        return(
            <p>{studentName}</p>
        );
    }

    return(
        <div>
            <h2>ASSIGNING JSX TO A VARIABLE CONDITIONALLY</h2>
            <StudentJ 
            name="Rohini"
            passed={true}/>

            <StudentJ 
            name="Devika"
            passed={1}/>
            <hr />
        </div>
    )
}

export { PassList, LogicalRendering, RenderingJSX };
