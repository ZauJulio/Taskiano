import React from 'react'

import EditorProject from '../Editor'

interface ICreateProject {
  close: () => void
}

function CreateProject(props: ICreateProject) {
  return <EditorProject {...props} />
}

export default CreateProject
