import React from 'react';
import CardProfile from './CardProfile';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export default function Card() {
    return (
        <div className='card'>
            <CardProfile />
            <CardBody />
            <CardFooter />
        </div>

    );
}