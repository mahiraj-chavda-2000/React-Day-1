import React from 'react';
import Heading from './Heading';
import Navbar from './Navbar';
import './App.css';
import Card from './Card';
import Greetings from './Greetings';

import Clock from './Clock';

function App() {
    return (
        <>
            <Navbar />
            <Greetings />
            <Clock />
            <Card name="First Card" imgpath="https://picsum.photos/200" desc="This is first card" />
            
        </>
    );
}

export default App;
