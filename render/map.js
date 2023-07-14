import React from "react";

function Map(){

    const arr = [1, 2, 3, 4, 5];

    const arrObject =[
        {id: 1,
        name: "React"},
        {id: 2,
        name: "Node"},
        {id: 3,
        name: "Angular"}
    ];

    const persons = {
        name: "Rubhini",
        age: 20,
        dept: "CSE"
    };

    const newArr = arr.map(no => no*no + ' ');
    const newArrObject = arrObject.map(entry => <li key={entry.id}>{entry.name}</li>);
    const values = Object.values(persons).map((value) => <h5>{value}</h5> )
    const keys = Object.keys(persons).map(key => <p>{key}</p>)


    return(
        <div>
            <h3>map method - array</h3>
            {newArr}

            <h3>map method - array of objects</h3>
            <ol>{newArrObject}</ol>

            <h3>map method - keys</h3>
            {keys}

            <h3>map method - values</h3>
            {values}
            <hr />

        </div>
    );
}

export default Map;