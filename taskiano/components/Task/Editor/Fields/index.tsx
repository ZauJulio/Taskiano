import React, { memo } from 'react'

import ToogleButton from '../../../ToogleButton'

import styles from './styles.module.scss'

interface IField {
  value: string | number | boolean | any
  onChange: (value: string | number | boolean | any) => void
}

const NoteTaskFc = (props: IField) => {
  return (
    <div className={`${styles.noteEditor} ${styles.general}`}>
      <label>Editor</label>
      <textarea
        className={styles.insertTextArea}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  )
}

const TimerTaskFc = (props: IField) => {
  return (
    <label className={`${styles.timerForm} ${styles.general}`}>
      Tempo Estimado/Limite
      <input
        type="datetime-local"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

const TitleTaskFc = (props: IField) => {
  return (
    <label className={`${styles.titleForm} ${styles.general}`}>
      Título
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  )
}

const FixTaskFc = (props: IField) => {
  return (
    <label className={`${styles.fixedButtonForm} ${styles.general}`}>
      Fixado
      <ToogleButton value={props.value} onChange={props.onChange} />
    </label>
  )
}

const SelectPriorityFc = (props: IField) => {
  return (
    <label className={`${styles.priorityForm} ${styles.general}`}>
      Prioridade
      <select
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      >
        <option value={0}>Sem prioridade</option>
        <option value={1}>Muito baixa</option>
        <option value={2}>Baixa</option>
        <option value={3}>Média</option>
        <option value={4}>Média alta</option>
        <option value={5}>Alta</option>
        <option value={6}>Muito alta</option>
        <option value={7}>Urgente</option>
      </select>
    </label>
  )
}

export const NoteTask = memo(NoteTaskFc)
export const TimerTask = memo(TimerTaskFc)
export const TitleTask = memo(TitleTaskFc)
export const FixTask = memo(FixTaskFc)
export const SelectPriority = memo(SelectPriorityFc)
