import React from 'react'

import Particles from 'react-tsparticles'

import colors from '../../styles/colors'
import styles from './styles.module.scss'

interface IParticles {
  className?: string
  children?: React.ReactNode
}

function Confetti(props: IParticles) {
  return (
    <div className={`${styles.confetti} ${props.className}`}>
      <Particles
        className={styles.particles}
        options={{
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            color: {
              value: [
                colors.purple,
                colors.orange,
                colors.highOrange,
                colors.highPurple
              ]
            },
            shape: { type: ['square'] },
            number: { value: 50 },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                minimumValue: 0,
                startValue: 'max',
                destroy: 'min'
              }
            },
            size: { value: 5 },
            move: {
              enable: true,
              speed: 10,
              decay: 0.1,
              random: true,
              angle: { value: 45, offset: 0 }
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: 'random',
              animation: { enable: true, speed: 20 }
            },
            tilt: {
              enable: true,
              direction: 'random',
              value: { min: 0, max: 360 },
              animation: { enable: true, speed: 60 }
            }
          },
          emitters: {
            rate: { delay: 0, quantity: 0 },
            life: { duration: 0.1, count: 1 }
          }
        }}
      />

      <div className={styles.children}>{props.children}</div>
    </div>
  )
}

export default Confetti
