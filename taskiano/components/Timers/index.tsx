import React from 'react';
import dynamic from 'next/dynamic';

import Compass from '../Compass';
import RenderTime from './RenderTime';
import useTimersState from './useTimersState';
import ProjectSelector from './ProjectSelector';
import CarouselActiveTasks from './CarouselActiveTasks';

import colors from '../../styles/colors';
import styles from './styles.module.scss';

const CountdownCircleTimer = dynamic(
  () => import('../CountdownCircleTimerWrapper'),
  { ssr: false }
);

interface ITimer {
  className?: string;
}

function Timers(props: ITimer) {
  const state = useTimersState();

  return (
    <div className={`${styles.container} ${props.className ?? ''}`}>
      <div className={styles.countdown}>
        <ProjectSelector
          handleSelectProject={state.handleSelectProject}
          currentProjectIndex={state.currentProjectIndex}
          currentProjects={state.currentProjects}
        />

        <h1 className={styles.title}>{state.selectedTask?.title}</h1>

        <CountdownCircleTimer
          isPlaying
          isLinearGradient
          key={state.selectedTask?.id}
          duration={state?.duration}
          initialRemainingTime={state.initialRemainingTime}
          colors={[
            [colors.highOrange, 0],
            [colors.highPurple, 1],
          ]}
        >
          {RenderTime}
        </CountdownCircleTimer>

        <CarouselActiveTasks
          currentTasks={state.currentTasks}
          selectedTask={state.selectedTask}
          handleSelectTask={state.handleSelectTask}
        />
      </div>

      <span className={styles.sepLine} />

      <div className={styles.compass}>
        <h1 className={styles.compassTitle}>Compasso</h1>
        <Compass />
      </div>
    </div>
  );
}

export default Timers;
