import React from 'react'
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
import {
  FixTask,
  NoteTask,
  SelectPriority,
  TimerTask,
  TitleTask
} from './Fields'

import MarkdownPreview from '../../MarkdownPreview'
import useFormState from './useFormState'

import type { ITask } from '../../../types'

import colors from '../../../styles/colors'
import styles from './styles.module.scss'

interface IEditorTask {
  task?: ITask
  projectId?: string
  projectColor?: string
  close: () => void
}

function EditorTask(props: IEditorTask) {
  const formState = useFormState({
    task: props.task,
    projectId: props.projectId,
    close: props.close
  })

  return (
    <div className={styles.editorTaskContainer}>
      <div className={styles.headerEditorTask}>
        <div
          className={styles.titleWrapper}
          style={{ background: props.projectColor ?? colors.white }}
        >
          <h1 className={styles.title}>
            {props.task ? 'Editar tarefa' : 'Criar tarefa'}
          </h1>
        </div>

        <div className={styles.formGroupHeader}>
          <TitleTask
            value={formState.title.state}
            onChange={formState.title.set}
          />
          <SelectPriority
            value={formState.priority.state}
            onChange={formState.priority.set}
          />
          <FixTask
            value={formState.fixed.state}
            onChange={formState.fixed.set}
          />
          <TimerTask
            value={formState.timerShow.state}
            onChange={formState.timerShow.set}
          />
        </div>
      </div>

      <form className={styles.formTask} onSubmit={formState.onSubmit}>
        <div className={styles.formNote}>
          <NoteTask
            value={formState.note.state}
            onChange={formState.note.set}
          />
          <MarkdownPreview
            className={styles.markdownPreview}
            note={formState.note.state}
            showLabel
          />
        </div>

        <input className={styles.formSubmit} type="submit" value="Salvar" />
      </form>
    </div>
  )
}

export default EditorTask
