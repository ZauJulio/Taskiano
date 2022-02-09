import { ITask } from '../../../types';

function addTimer(minutes: number = 30) {
  var now = new Date();
  now.setMinutes(now.getMinutes() + minutes);

  return new Date(now);
}

interface InitialTaskContext {
  projectName: string;
  tasks: ITask[];
}

export function getTasksInitalContext(): InitialTaskContext[] {
  return [
    {
      projectName: 'Hello World',
      tasks: [
        {
          title: 'Hello World',
          note: '# 1º Task',
          status: 'open',
          created_at: new Date(),
          closed_in: null,
          timer: addTimer(61),
          number: 1,
        },
        {
          title: 'Ops, Tarefa atrasada?',
          note: '# Só um exemplo 😅',
          status: 'open',
          created_at: new Date(),
          closed_in: null,
          timer: addTimer(30),
          number: 2,
        },
      ],
    },
    {
      projectName: 'Sobre',
      tasks: [
        {
          title: 'Projetos',
          note: require('../../md/aboutProject.md').default,
          status: 'open',
          created_at: new Date(),
          closed_in: null,
          timer: null,
          number: 3,
        },
      ],
    },
  ];
}
