/**
 * the patterns in this file are NOT meant to be representative of the code style that should be used for this challenge
 * DO NOT make changes to this file, however its contents can be imported to complete the editor layout
 */

import { DataType, Document } from './data';

export const logDocument = {
  id: 'log-id',
  name: 'log-doc',
  data: {
    type: DataType.LOG,
    message: 'hello!',
  },
} as Document<DataType.LOG>;

export const executeDocument = {
  id: 'execute-id',
  name: 'execute-doc',
  data: {
    type: DataType.EXECUTE,
    expression: '1 + $1 * $2 - 4',
    arguments: ['10', '22'],
  },
} as Document<DataType.EXECUTE>;

export const branchDocument = {
  id: 'branch-id',
  name: 'branch-doc',
  data: {
    type: DataType.BRANCH,
    condition: '$foo > 10',
    then: 'next-id',
  },
} as Document<DataType.BRANCH>;

export const loopDocument = {
  id: 'loop-id',
  name: 'loop-doc',
  data: {
    type: DataType.LOOP,
    expression: '10 + 3 * $foo',
    repeat: 10,
  },
} as Document<DataType.LOOP>;

export const jumpDocument = {
  id: 'jump-id',
  name: 'jump-doc',
  data: {
    type: DataType.JUMP,
    to: 'other-id',
  },
} as Document<DataType.JUMP>;

export const saveDocument = {
  id: 'save-id',
  name: 'save-doc',
  data: {
    type: DataType.SAVE,
    into: 'foo',
  },
} as Document<DataType.SAVE>;

export const loadDocument = {
  id: 'load-id',
  name: 'load-doc',
  data: {
    type: DataType.LOAD,
    from: 'foo',
  },
} as Document<DataType.LOAD>;

export const DOCUMENTS: Document[] = [logDocument, executeDocument, branchDocument, loopDocument, jumpDocument, saveDocument, loadDocument];
