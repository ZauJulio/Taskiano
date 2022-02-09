import React from 'react';

import Modal from '../../Modal';

import EditorTask from '../Editor';

interface ICreateTask {
  projectColor?: string;
  projectId?: string;
  close: () => void;
}

function CreateTask(props: ICreateTask) {
  return (
    <Modal close={props.close}>
      <EditorTask {...props} />
    </Modal>
  );
}

export default CreateTask;
