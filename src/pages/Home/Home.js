import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import "./home.css"
import {userdata} from "../../data"
import NewMembers from '../../components/NewMembers/NewMembers';
import LatestTransactions from '../../components/LatestTransactions/LatestTransactions';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userdata} title=" active user details" grid dataKey="active user"/>
            <div className="homeWidgets">
                <NewMembers/>
                <LatestTransactions/>
            </div>
        </div>
    );
};

export default Home;
