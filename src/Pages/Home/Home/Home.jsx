import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import GallerySection from '../Gallery/GallerySection';
import Achievement from '../Achievements/Achievement';
import TeamMembers from '../TeamMembers/TeamMembers';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cleaning Service | Home</title>
            </Helmet>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Achievement></Achievement>
            <TeamMembers></TeamMembers>
        </div>
    );
};

export default Home;