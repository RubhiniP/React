import React from "react";
import ComponentC from "./ComponentC";

export const userContext = React.createContext();
export const ChannelContext = React.createContext();

function ComponentA(){
    return(
        <div>
            Component A
            <userContext.Provider value="Rubhini">
                <ChannelContext.Provider value="React">
                    <ComponentC />
                </ChannelContext.Provider>
            </userContext.Provider>
        </div>
    );
}

export default ComponentA;