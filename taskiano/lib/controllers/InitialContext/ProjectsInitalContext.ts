import { IProject } from '../../../types';

export function getProjectsInitalContext(): IProject[] {
  return [
    {
      name: 'Hello World',
      description: '1º Projeto',
      created_at: new Date(),
      closed_in: null,
      color: 11235583, // Purple: #ab70ff
    },
    {
      name: 'More One',
      description: '1º Projeto',
      created_at: new Date(),
      closed_in: null,
      color: 16740437, // OrangeDark: #ff7055
    },
    {
      name: 'Sobre',
      description: 'Algumas informações :)',
      created_at: new Date(),
      closed_in: null,
      color: 16752697, // Orange: #ffa039
    },
  ];
}
