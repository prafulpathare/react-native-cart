
import React, { useEffect, useState, Node, setState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";


const App =() => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}


export default App;