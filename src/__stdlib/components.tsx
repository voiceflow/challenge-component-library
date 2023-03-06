/**
 * the patterns in this file are NOT meant to be representative of the code style that should be used for this challenge
 * DO NOT make changes to this file, however its contents can be imported to complete the editor layout
 */

import { Data, DataType, Document, DocumentID } from './data';

export const DocumentCard = ({ doc, onClick }: { doc: Document; onClick?: () => void }) => (
  <section
    onClick={() => onClick?.()}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: 'lightgreen' }}
  >
    <h3>{doc.name}</h3>
    <main>type: {doc.data.type}</main>
  </section>
);

interface EditorControlProps<T> {
  label: string;
  value: T;
  onChange: (value: T) => void;
}

const EditorControlContainer = ({ label, children }: React.PropsWithChildren<{ label: string }>) => (
  <div>
    <label htmlFor={label.toLowerCase()} style={{ marginRight: 10 }}>
      <strong>{label}:</strong>
    </label>
    {children}
  </div>
);

const EditorControl: {
  (props: EditorControlProps<string>): React.ReactElement;
  (props: EditorControlProps<number>): React.ReactElement;
} = ({ label, value, onChange }: EditorControlProps<any>) => (
  <EditorControlContainer label={label}>
    <input type={typeof value} id={label.toLowerCase()} value={value} onChange={(e) => onChange(e.target.value)} />
  </EditorControlContainer>
);

const EditorLink = ({ label, documentID, setActiveDocument }: { label: string; documentID: DocumentID; setActiveDocument: () => void }) => (
  <EditorControlContainer label={label}>
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        setActiveDocument();
      }}
    >
      {documentID}
    </a>
  </EditorControlContainer>
);

export const DataEditor = <T extends DataType>({
  data,
  onChange,
  setActiveDocument,
}: {
  data: Data<T>;
  onChange: (value: Data<T>) => void;
  setActiveDocument: (documentID: DocumentID) => void;
}) => {
  switch (data.type) {
    case DataType.LOG:
      return (
        <>
          <EditorControl label="Message" value={data.message} onChange={(message) => onChange({ ...data, message })} />
          {data.then && <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />}
        </>
      );
    case DataType.EXECUTE:
      return (
        <>
          <EditorControl label="Expression" value={data.expression} onChange={(expression) => onChange({ ...data, expression })} />
          <EditorControl
            label="Arguments"
            value={data.arguments.join(', ')}
            onChange={(args) =>
              onChange({
                ...data,
                arguments: args
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean),
              })
            }
          />
          <ol>
            {data.arguments.map((arg, index) => (
              <li key={index}>{arg}</li>
            ))}
          </ol>
          {data.then && <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />}
        </>
      );
    case DataType.BRANCH:
      return (
        <>
          <EditorControl label="Condition" value={data.condition} onChange={(condition) => onChange({ ...data, condition })} />
          <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />
          {data.else && <EditorLink label="Else" documentID={data.else} setActiveDocument={setActiveDocument.bind(null, data.else)} />}
        </>
      );
    case DataType.LOOP:
      return (
        <>
          <EditorControl label="Expression" value={data.expression} onChange={(expression) => onChange({ ...data, expression })} />
          <EditorControl label="Repeat" value={data.repeat} onChange={(repeat) => onChange({ ...data, repeat })} />
          {data.then && <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />}
        </>
      );
    case DataType.JUMP:
      return (
        <>
          <EditorControl label="To" value={data.to} onChange={(to) => onChange({ ...data, to })} />
        </>
      );
    case DataType.SAVE:
      return (
        <>
          <EditorControl label="Expression" value={data.expression} onChange={(expression) => onChange({ ...data, expression })} />
          <EditorControl label="Into" value={data.into} onChange={(into) => onChange({ ...data, into })} />
          {data.then && <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />}
        </>
      );
    case DataType.LOAD:
      return (
        <>
          <EditorControl label="From" value={data.from} onChange={(from) => onChange({ ...data, from })} />
          {data.then && <EditorLink label="Then" documentID={data.then} setActiveDocument={setActiveDocument.bind(null, data.then)} />}
        </>
      );
    default:
      return null;
  }
};

export const DocumentEditor = <T extends DataType>({
  doc,
  onChange,
  setActiveDocument,
}: {
  doc: Document<T>;
  onChange: (value: Document<T>) => void;
  setActiveDocument: (documentID: DocumentID) => void;
}) => (
  <section style={{ padding: 10, backgroundColor: 'pink' }}>
    <h2>{doc.name}</h2>
    <p>
      <strong>ID:</strong> {doc.id}
    </p>
    <main>
      <DataEditor data={doc.data} onChange={(data) => onChange({ ...doc, data })} setActiveDocument={setActiveDocument} />
    </main>
  </section>
);
