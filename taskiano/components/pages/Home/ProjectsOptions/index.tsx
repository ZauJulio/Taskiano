import React from 'react';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsGridFill } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';

import styles from './styles.module.scss';

interface IProjectsOptions {
  view: {
    inWidget: () => boolean;
    inList: () => boolean;
    handleViewInwidgets: () => void;
    handleViewInList: () => void;
  };
  handleAddProject: () => void;
}

function ProjectsOptions({ view, handleAddProject }: IProjectsOptions) {
  const optionSelected = (selected: boolean) => {
    return selected ? styles.selected : '';
  };

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.viewIn}>
        <div
          className={`${styles.viewIcon} ${optionSelected(view.inWidget())}`}
          onClick={view.handleViewInwidgets}
        >
          <BsGridFill />
        </div>

        <div
          className={`${styles.viewIcon} ${optionSelected(view.inList())}`}
          onClick={view.handleViewInList}
        >
          <AiOutlineUnorderedList />
        </div>
      </div>

      <h1 className={styles.title}>Projetos</h1>

      <div className={styles.addProjectIcon}>
        <RiAddFill onClick={handleAddProject} />
      </div>

      <span className={styles.separator} />
    </div>
  );
}

export default ProjectsOptions;
