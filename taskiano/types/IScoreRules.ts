interface IRecordObject {
  [key: string]: number;
}

interface IScoreRules {
  [key: string]: {
    [key: string]: IRecordObject;
  };
}

export default IScoreRules;
