import { ITask } from '../../../types'

export let tasks: ITask[] = [
  {
    id: '32a9b0cd-e311-433d-833b-5853cedffc30',
    title: 'Tarefa 666: Welcome to the Hell',
    number: 666,
    remainingTime: 696969,
    note: '# Hello Luci',
    fixed: false,
    priority: 6,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() - 1000 * 60 * 60),
    projectId: 'abef7153-742f-4b20-bb42-ae772053050b'
  },
  {
    id: '32a9b0cd-e311-433d-833b-5853cedffc27',
    title: 'Tarefa 01: Hello World',
    number: 1,
    remainingTime: 14400,
    note: '# Hello Taskiano',
    fixed: false,
    priority: 2,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 1000 * 60 * 60 * 5),
    projectId: 'abef7153-742f-4b20-bb42-ae772053050b'
  },
  {
    id: '32a9b0cd-e311-433d-833b-5853cedffc28',
    title: 'Tarefa 02: Hello World',
    number: 2,
    remainingTime: 14400,
    note: '# Hello Taskiano',
    fixed: false,
    priority: 2,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 100000),
    projectId: 'abef7153-742f-4b20-bb42-ae772053050b'
  },
  {
    id: '32a9b0cd-e311-433d-833b-5853cedffc29',
    title: 'Tarefa 03: Hello World',
    number: 3,
    remainingTime: 14400,
    note: '# Hello Taskiano',
    fixed: false,
    priority: 2,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 9400),
    projectId: 'c9f8f8e1-f8c9-4f7b-b8e2-f8f8f8f8f8f8'
  },
  {
    id: '32a9b0cd-e311-433d-833b-5853cedffc30',
    title: 'Tarefa 04: Hello World',
    number: 4,
    remainingTime: 14400,
    note: '# Hello Taskiano - 4',
    fixed: true,
    priority: 3,
    status: 'open',
    created_at: new Date(),
    closed_in: new Date(new Date().getTime() + 232134),
    timer: new Date(new Date().getTime() + 20400),
    projectId: 'd9f8f8e1-f8c9-4f7b-b8e2-f8f8f8f8f8f8'
  }
]
