import React from 'react';
import { default as ParticlesFC } from 'react-tsparticles';

import colors from '../../../../styles/colors';
import styles from './styles.module.scss';

function Particles() {
  return (
    <ParticlesFC
      className={styles.particles}
      options={{
        background: {
          color: '#24283f',
        },
        fpsLimit: 60,
        interactivity: {
          detect_on: 'canvas',
          events: { resize: true },
        },
        particles: {
          color: {
            value: [
              colors.purple,
              colors.orange,
              colors.highPurple,
              colors.highOrange,
              colors.white,
            ],
          },
          move: {
            attract: {
              enable: false,
              rotate: { x: 800, y: 800 },
            },
            enable: true,
            speed: 3,
            outModes: { default: 'destroy' },
            trail: { enable: true, length: 30 },
          },
          number: { density: { enable: true, area: 400 }, value: 0 },
          opacity: { value: 0.4 },
          shape: { type: 'circle' },
          size: {
            value: 25,
            animation: {
              startValue: 'min',
              enable: true,
              minimumValue: 1,
              speed: 2,
              destroy: 'max',
              sync: true,
            },
          },
        },
        detectRetina: true,
        emitters: {
          direction: 'none',
          rate: { quantity: 5, delay: 0.3 },
          size: { width: 0, height: 0 },
          position: { x: 50, y: 50 },
        },
      }}
    />
  );
}

export default Particles;
