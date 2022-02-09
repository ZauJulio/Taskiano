import * as Yup from 'yup'

const HistorySchema = Yup.object().shape({
  id: Yup.string(),
  updated_at: Yup.date().required(),
  weekdayTaskCount: Yup.object().shape({
    mon: Yup.number().required(),
    tue: Yup.number().required(),
    wed: Yup.number().required(),
    thu: Yup.number().required(),
    fri: Yup.number().required(),
    sat: Yup.number().required(),
    sun: Yup.number().required()
  })
})

export default HistorySchema
