import React from 'react';

import TaskStatus from '../../../Task/Status';
import Confetti from '../../../Confetti';

import type { ITask } from '../../../../types';
import styles from './styles.module.scss';

interface IStatus {
  nextTasks?: ITask[];
  overdueTasks?: ITask[];
}

function Status({ nextTasks = [], overdueTasks = [] }: IStatus) {
  const onEmptyNextTasks =
    overdueTasks?.length === 0 ? 'Tudo pronto 😏' : 'Nada em um futuro proxímo';
  const onEmptyOverdueTasks =
    nextTasks?.length === 0 ? 'Tudo pronto 😏' : 'Parabéns, seu score agradece';

  return (
    <div className={styles.statusContainer}>
      {nextTasks.length > 0 || overdueTasks.length > 0 ? (
        <>
          <TaskStatus
            title="Próximas Tarefas"
            tasks={nextTasks ?? []}
            onEmpty={onEmptyNextTasks}
          />

          <span className={styles.separator} />

          <TaskStatus
            title="Tarefas Atrasadas"
            tasks={overdueTasks ?? []}
            onEmpty={onEmptyOverdueTasks}
          />
        </>
      ) : (
        <Confetti className={styles.confetti}>
          <h2>
            Tudo pronto 🎉 <br />
            Qual a proxíma tarefa?
          </h2>
        </Confetti>
      )}
    </div>
  );
}

export default Status;
