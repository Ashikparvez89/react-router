import React from 'react';
import Header from './pages/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    console.log(navigation.state)
    return (
        <div>
            <Header></Header>

            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;