import React from 'react';

import Modal from '../../Modal';
import useFormState from './useFormState';
import { ColorSelect, Description, Name } from './Fields';

import { IProject } from '../../../types';

import styles from './styles.module.scss';
import { BsFillTrashFill } from 'react-icons/bs';
import colors from '../../../styles/colors';
import { useProjects } from '../../../hooks/useProjects';
import { toast } from 'react-toastify';

interface IEditorProject {
  project?: IProject;
  close: () => void;
}

function EditorProject(props: IEditorProject) {
  const formState = useFormState({
    project: props.project,
    close: props.close,
  });

  const deleteProject = useProjects((ctx) => ctx.deleteProject);

  const tryDeleteProject = () => {
    try {
      toast.promise(deleteProject(props.project?.id), {
        pending: 'Excluindo',
        success: 'Tudo certo 🦄',
        error: 'Ah não! Verifique os dados 🤯',
      });

      props.close();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal close={props.close}>
      <div className={styles.container}>
        <div className={styles.edit}>
          <a>
            <BsFillTrashFill color={colors.red} onClick={tryDeleteProject} />
          </a>
        </div>

        <h1 className={styles.title}>Novo Projeto</h1>
        <form onSubmit={formState.onSubmit}>
          <Name value={formState.name.state} onChange={formState.name.set} />

          <Description
            value={formState.description.state}
            onChange={formState.description.set}
          />

          <ColorSelect
            value={formState.color.state}
            onChange={formState.color.set}
          />

          <div className={styles.inputContainer}>
            <button className={styles.submitButton} type="submit">
              Criar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditorProject;
