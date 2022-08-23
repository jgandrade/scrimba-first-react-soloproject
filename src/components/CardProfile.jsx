import React from 'react';

export default function CardProfile() {
    return (
        <div className='card-profile'>
            <img src='../../public/card-picture.jpg' width='50px' />
            <h2>John Glenn Andrade</h2>
            <p className='front'>Frontend Developer</p>
            <p>johnglennandrade@gmail.com</p>
            <div className='profile-buttons'>
                <button>Email</button>
                <button className='linkedIn'>LinkedIn</button>
            </div>
        </div>
    );
}