import React, { useState } from "react";
import ShoppingList from "./ShoppingList";


export default function Header(props){
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={props.handleDarkModeClick}>
                  Mode
                </button>
            </header>
            <ShoppingList items={itemData} />
        </div>
    )
}