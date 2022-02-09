import React, { useState } from 'react'
import Head from 'next/head'

import { useAuth } from '../../hooks/useAuth'
import { useTasks } from '../../hooks/useTasks'
import { useProjects } from '../../hooks/useProjects'

import Loader from '../../components/Loader'
import CreateProject from '../../components/Project/Create'
import ProjectsList from '../../components/Project/List'
import ProjectsWidget from '../../components/Project/Widget'
import UserScore from '../../components/UserScore'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import Timers from '../../components/Timers'

import Status from '../../components/pages/Home/Status'
import ProjectsOptions from '../../components/pages/Home/ProjectsOptions'

import { selectNextTasks, selectOverdueTasks } from '../../utils'

import styles from './styles.module.scss'

export default function Home() {
  const tasks = useTasks((state) => state.tasks)
  const projects = useProjects((ctx) => ctx.projects)
  const authenticated = useAuth((ctx) => ctx.authenticated)

  const nextTasks = selectNextTasks(tasks, 3)
  const overdueTasks = selectOverdueTasks(tasks, 3)

  const [addProject, setAddProject] = useState(false)
  const [viewIn, setViewIn] = useState<'widgets' | 'list'>('widgets')

  const viewHandle = {
    list: () => setViewIn('list'),
    widgets: () => setViewIn('widgets'),
    inList: () => viewIn === 'list',
    inWidget: () => viewIn === 'widgets'
  }

  return (
    <div className={styles.containerGrid}>
      <Head>
        <title>Taskiano</title>
        <meta name="description" content="Dashboard of tasks" />
        <meta
          name="google-site-verification"
          content="sgkXcZZTMacCng8hHTlU2Ffgm6EPE6zUiepuEjtdvt4"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar className={styles.sideBar} />
      <Topbar className={styles.topBar} />
      <Timers className={styles.timer} />

      <Loader isLoading={!authenticated} />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.globalStatus}>
            <Status nextTasks={nextTasks} overdueTasks={overdueTasks} />
            <UserScore />
          </div>

          <div className={styles.projectsContent}>
            {addProject && <CreateProject close={() => setAddProject(false)} />}

            <ProjectsOptions
              view={{
                inWidget: () => viewIn === 'widgets',
                inList: () => viewIn === 'list',
                handleViewInwidgets: () => setViewIn('widgets'),
                handleViewInList: () => setViewIn('list')
              }}
              handleAddProject={() => setAddProject(true)}
            />

            {viewHandle.inList() && projects.length > 0 ? (
              <ProjectsList projects={projects} tasks={tasks} />
            ) : (
              <ProjectsWidget projects={projects} tasks={tasks} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
