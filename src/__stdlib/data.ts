/**
 * the patterns in this file are NOT meant to be representative of the code style that should be used for this challenge
 * DO NOT make changes to this file, however its contents can be imported to complete the editor layout
 */

export enum DataType {
  LOG = 'log',
  EXECUTE = 'execute',
  BRANCH = 'branch',
  LOOP = 'loop',
  JUMP = 'jump',
  SAVE = 'save',
  LOAD = 'load',
}

export type DocumentID = string & { readonly __tag: unique symbol };

export interface LogData {
  type: DataType.LOG;
  message: string;
  then?: DocumentID;
}

export interface ExecuteData {
  type: DataType.EXECUTE;
  expression: string;
  arguments: string[];
  then?: DocumentID;
}

export interface BranchData {
  type: DataType.BRANCH;
  condition: string;
  then: DocumentID;
  else?: DocumentID;
}

export interface LoopData {
  type: DataType.LOOP;
  expression: string;
  repeat: number;
  then?: DocumentID;
}

export interface JumpData {
  type: DataType.JUMP;
  to: DocumentID;
}

export interface SaveData {
  type: DataType.SAVE;
  expression: string;
  into: string;
  then?: DocumentID;
}

export interface LoadData {
  type: DataType.LOAD;
  from: string;
  then?: DocumentID;
}

export type Data<T extends DataType = DataType> = {
  [DataType.LOG]: LogData;
  [DataType.EXECUTE]: ExecuteData;
  [DataType.BRANCH]: BranchData;
  [DataType.LOOP]: LoopData;
  [DataType.JUMP]: JumpData;
  [DataType.SAVE]: SaveData;
  [DataType.LOAD]: LoadData;
}[T];

export interface Document<T extends DataType = DataType> {
  id: DocumentID;
  name: string;
  data: Data<T>;
}
