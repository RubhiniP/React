import React from "react";
import ListChild from "./listChild";

function Display(){

    const details = [
        {id: 1, name: "Rubhini", dept: "CSE"},
        {id: 2, name: "Rohini", dept: "CSE"},
        {id: 3, name: "Devika", dept: "IT"}
    ];

    const personList = details.map(detail => (<ListChild key={detail.id} detail={detail}/>));
    return (
    <div>
    {personList}
    <hr />
    </div>
    );
}

export default Display;