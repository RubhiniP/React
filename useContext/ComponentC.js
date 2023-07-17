import React, { useContext } from "react";
import { userContext, ChannelContext } from "./ComponentA";

function ComponentC(){

    const user = useContext(userContext);
    const channel = useContext(ChannelContext);

    return(
        <div>
            Component C
            <p>{user} is practicing {channel}</p>
        </div>
    );
}

export default ComponentC;