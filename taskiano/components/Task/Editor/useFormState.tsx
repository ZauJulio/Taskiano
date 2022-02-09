import { useCallback, useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useTasks } from '../../../hooks/useTasks';

import type { ITask } from '../../../types';

interface IFormState {
  task?: ITask;
  projectId?: string;
  close: () => void;
}

function useFormState(props: IFormState) {
  const [title, setTitle] = useState(props.task?.title ?? 'Tarefa: ');
  const [note, setNote] = useState(props.task?.note ?? '# Hello World');
  const [fixed, setFixed] = useState<boolean>(props.task?.fixed ?? false);
  const [priority, setPriority] = useState(props.task?.priority ?? 0);
  const [timer, setTimer] = useState<Date>();
  const [timerShow, setTimerShow] = useState('');

  const create = useTasks((value) => value.create);
  const update = useTasks((value) => value.update);

  const onChangeDate = useCallback(
    (e: any) => {
      const dateTime = new Date(e.target ? e.target.value : e);
      const date = dateTime.toISOString().substring(0, 11);
      const localDateTime =
        date + dateTime.toLocaleString('pt-BR').substring(11);

      setTimer(dateTime);
      setTimerShow(localDateTime);
    },
    [setTimer, setTimerShow]
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data: ITask = {};
    let callback: () => Promise<void>;

    if (props.task) {
      const old = props.task;

      data = {
        ...old,
        ...data,
        timer: timer !== old.timer ? timer : old.timer,
        created_at: timer !== old.timer ? new Date() : old.created_at,
      };

      callback = () => update(props.task?.id, data);
    } else {
      data = {
        title,
        note,
        fixed,
        priority,
        status: 'open',
        created_at: new Date(),
        projectId: props.projectId,
        timer: timer || null,
      };

      callback = () => create(data);
    }

    try {
      await callback();
      toast.success('Tudo certo 🦄');
      props.close();
    } catch (err) {
      console.error(err);
      toast.error('Ah não! Verifique os dados 🤯');
    }
  };

  useEffect(() => {
    if (props.task?.timer) onChangeDate(props.task.timer);
  }, [onChangeDate, props.task?.timer]);

  return {
    title: { state: title, set: setTitle },
    note: { state: note, set: setNote },
    fixed: { state: fixed, set: setFixed },
    priority: { state: priority, set: setPriority },
    timerShow: { state: timerShow, set: onChangeDate },
    onSubmit,
  };
}

export default useFormState;
