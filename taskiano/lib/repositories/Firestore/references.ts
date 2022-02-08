import { collection } from "firebase/firestore";

import { firestore } from "../../../services/Firebase";

const TaskRef = collection(firestore, "task");
const ProjectRef = collection(firestore, "project");
const HistoryRef = collection(firestore, "history");
const UserRef = collection(firestore, "user");

export { TaskRef, ProjectRef, HistoryRef, UserRef };
