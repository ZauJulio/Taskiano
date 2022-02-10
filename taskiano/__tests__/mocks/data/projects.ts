import { IProject } from '../../../types'

export let projects: IProject[] = [
  {
    id: 'abef7153-742f-4b20-bb42-ae772053050b',
    name: 'Projeto teste de software',
    created_at: new Date(),
    closed_in: null,
    description:
      'Projeto criado com o objetivo de aplicar as técnicas aprendidas na disciplina',
    color: 2310708,
    hasArchived: false,
    tasks: ['32a9b0cd-e311-433d-833b-5853cedffc30'],
    userId: '7fd18545-8054-45f5-9d76-9addd179d13c'
  },
  {
    id: 'c9f8f8e1-f8c9-4f7b-b8e2-f8f8f8f8f8f8',
    name: 'Projeto 2',
    created_at: new Date(),
    closed_in: null,
    description: 'Segundo projeto',
    color: 2112426,
    hasArchived: false,
    tasks: ['32a9b0cd-e311-433d-833b-5853cedffc29'],
    userId: '7fd18545-8054-45f5-9d76-9addd179d13b'
  },
  {
    id: 'd9f8f8e1-f8c9-4f7b-b8e2-f8f8f8f8f8f8',
    name: 'Projeto 3',
    created_at: new Date(),
    closed_in: null,
    description: 'Terceiro projeto',
    color: 2123326,
    hasArchived: true,
    tasks: ['32a9b0cd-e311-433d-833b-5853cedffc30'],
    userId: '7fd18545-8054-45f5-9d76-9addd179d13b'
  }
]
