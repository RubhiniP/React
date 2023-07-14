import React from "react";

const details = [
    {id: 1, name: "Rubhini", dept: "CSE"},
    {id: 2, name: "Rohini", dept: "CSE"},
    {id: 3, name: "Devika", dept: "IT"}
];

function CSE(){
    const CSEList = details.filter(details => details.dept === "CSE");
    return CSEList;
}

function display(){
    const newList = CSE();
    return newList.map(newList => <h2 key={newList.id}>{newList.name}</h2>);
}
 
export default display;
