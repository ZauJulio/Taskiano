import { toast } from 'react-toastify'

export const ToastTryOtherProvider = () =>
  toast.error('Ops, Tente outro provedor 🤨')

export const ToastTryAgain = () => toast.error('Ops, Tente novamente 😢')

export const ToastTrySignInAgain = () =>
  toast.error('Ops, Tente entrar novamente 😢')

export const ToastDisconnected = () =>
  toast.error('Ops, Você está desconectado 😗')

export const ToastComeBackSoon = () => toast.success('Volte logo 👋')

export const ToastFoundedEmail = () => toast.success('Encontramos você 🌈')

export const ToastEmailExists = (providerId?: string, email?: string) =>
  toast.warn(
    `Esse email já é utilizado por ${providerId} para ${email} entrar.\n` +
      "Vincule os email's para continuar.\n" +
      'Você ainda porderá criar novos projetos e tarefas.'
  )
