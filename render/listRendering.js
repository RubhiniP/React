import React from "react";

const details = [
    {id: 1, name: "Rubhini", dept: "CSE"},
    {id: 2, name: "Rohini", dept: "CSE"},
    {id: 3, name: "Devika", dept: "IT"}
];

function Display(){
    return details.map( (details) => 
    <li key={details.id}><b>{details.name}</b> is studying department {details.dept} department.</li>
    );
}

export default Display;