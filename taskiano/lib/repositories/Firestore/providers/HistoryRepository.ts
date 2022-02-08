import { FireRepository, HistoryRef, HistorySchema } from "../../Firestore";
import { IHistory } from "../../../../types";

export const HistoryRepository = new FireRepository<IHistory>({
  ref: HistoryRef,
  schema: HistorySchema,
  _name: "History",
});
