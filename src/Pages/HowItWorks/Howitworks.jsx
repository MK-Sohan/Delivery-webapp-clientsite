import React, { use, useEffect, useState } from 'react';
import HowworksCards from './HowworksCards';

const Howitworks = () => {
    // const [todos, setTodos] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   fetch("https://infinite-spire-80356.herokuapp.com/todoList")
    //     .then((res) => res.json())
    //     .then((data) => setTodos(data));
    // }, [todos]);
    const [carddata, setCarddata] = useState([])
    useEffect(() => {
        fetch("howitworks.json")
            .then((res) => res.json())
            .then((data) => setCarddata(data))

    }, [])
    return (
        <div className='lg:w-[80%] m-auto   md:w-full'>
            <HowworksCards carddata={carddata}></HowworksCards>
        </div>
    );
};

export default Howitworks;