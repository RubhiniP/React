import React from "react";

function ListChild({detail}){
    return <h2>{detail.name}, {detail.dept}</h2>;
}

export default ListChild;