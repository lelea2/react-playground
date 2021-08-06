import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 90%;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  height: 300px;
  width: 90%;
  border: 1px solid #ccc;
  padding; 10px;
`;

const TaskEdit = ({ task, handleTitleOnChange, handleContentOnChange, onDelete }) => {
  const onChange = (e, type) => {
    const value = e.target.value;
    if (type === 'title') {
      handleTitleOnChange(task.id, value);
    } else if (type === 'content') {
      handleContentOnChange(task.id, value);
    }
  };

  return (
    <div>
      <button onClick={onDelete}>Delete</button>
      <h2>
        <Input type="text" value={task.title} onChange={(e) => onChange(e, 'title')} />
      </h2>
      <p>
        <TextArea value={task.content} onChange={(e) => onChange(e, 'content')} />
      </p>
    </div>
  );
};

export default TaskEdit;