import React from 'react';

export default function CardProfile() {
    return (
        <div>
            <img src='../../public/card-picture.jpg' width='50px' />
            <h2>John Glenn Andrade</h2>
            <p>Frontend Developer</p>
            <p>johnglennandrade+scrimba@gmail.com</p>
            <div className='profile-buttons'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    );
}