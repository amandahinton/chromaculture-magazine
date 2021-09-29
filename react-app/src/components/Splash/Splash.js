import React from 'react';
import "./splash.css"

function Splash() {

    return (
        <div className="splash-div">
            <h1 className="splash-title">Welcome to Chromaculture!</h1>
            <h2 className="splash-subtitle">The Digital Magazine for Color Lovers</h2>
            <div className="splash-image-grid">
                <img className="splash-image" src="https://images.unsplash.com/photo-1502691876148-a84978e59af8" alt="colorful walkway" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1520207756688-175b32d0917d" alt="pink lightbulb" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1600832331197-ad575931911b" alt="fanned pantone cards" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1596798647070-c015ec23610d" alt="flamingo feathers" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1516478784322-0b77268e6c64" alt="candy sprinkles" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b" alt="dirty paintbrushes" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1534287610067-865f1f2ad7e5" alt="blue door" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1565793388498-6eb52f629afe" alt="spraypainted rotary phone" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1623929147453-b0abf89a9363" alt="coral reef" />
                <img className="splash-image" src="https://images.unsplash.com/photo-1509652839609-d94a8ad572db" alt="spilled ink" />
            </div>
            <h3 className="splash-description">Chromaculture is a digital magazine with an inspiring collection of stories from around the web about palettes, pigments, and projects that are color-related. We blend color theory, art history, industry information, and pop culture in a way that is modern, informative, provocative, and playful. We'll take you to surprising places in the spectrum!</h3>
        </div>
    );
}

export default Splash;
