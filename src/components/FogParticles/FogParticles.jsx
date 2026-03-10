import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const FogParticles = ({ isUpsideDown }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const options = {
        fullScreen: { enable: true, zIndex: 1 },
        particles: {
            number: {
                value: isMobile ? (isUpsideDown ? 40 : 20) : (isUpsideDown ? 100 : 50),
                density: { enable: true, area: 800 },
            },
            color: {
                value: isUpsideDown ? "#ff0000" : "#888888",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: { min: 0.1, max: 0.3 },
                animation: {
                    enable: !isMobile, // Disable opacity pulses on mobile
                    speed: 1,
                    sync: false,
                },
            },
            size: {
                value: { min: 1, max: isMobile ? 3 : 5 },
            },
            move: {
                enable: true,
                speed: isUpsideDown ? 1.5 : 0.8,
                direction: "random",
                random: true,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: !isMobile, // Disable hover effects on mobile
                    mode: "bubble",
                },
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                },
            },
        },
        detectRetina: false, // Disabling retina detection on mobile can save performance
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[1]">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={options}
            />
        </div>
    );
};

export default FogParticles;
