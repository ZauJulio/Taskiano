import { ProjectSchema } from '../../../lib/schemas/'

describe('project schema', () => {
  it('should validate the project schema', async () => {
    const data = {
      id: 'abef7153-742f-4b20-bb42-ae772053050b',
      name: 'Projeto teste de software',
      created_at: new Date(),
      closed_in: null,
      description:
        'Projeto criado com o objetivo de aplicar as técnicas aprendidas na disciplina',
      color: 2310708,
      hasArchived: false,
      tasks: ['32a9b0cd-e311-433d-833b-5853cedffc30']
    }

    await ProjectSchema.validate(data, { abortEarly: false })
  })

  it('should fail to validate project schema', async () => {
    const data = {
      id: 'abef7153-742f-4b20-bb42-ae772053050b',
      created_at: new Date(),
      closed_in: null,
      description:
          'Projeto criado com o objetivo de aplicar as técnicas aprendidas na disciplina',
      color: 2310708,
      hasArchived: false,
      tasks: ['32a9b0cd-e311-433d-833b-5853cedffc30']
    }
    try {
      await ProjectSchema.validate(data, { abortEarly: false })
    } catch (error: any) {
      expect(error.message).toBe('name is a required field')
    }
  })
})
