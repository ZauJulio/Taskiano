import { getTasksInitalContext } from ".";
import { IHistory } from "../../../types";

export function getHistoryInitialContext(): IHistory {
  return {
    userId: "",
    score: 0,
    updated_at: new Date(),
    lastTaskNumber: getTasksInitalContext().reduce((acc, curr) => {
      return acc + curr.tasks.length;
    }, 0),
    weekdayTaskCount: {
      mon: 0,
      tue: 0,
      wed: 0,
      thu: 0,
      fri: 0,
      sat: 0,
      sun: 0,
    },
  };
}
