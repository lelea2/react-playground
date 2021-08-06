import moment from 'moment';

const TaskItem = ({ task }) => {
	return (
    <>
      <h3>{task.title || '<Placeholder title>'}</h3>
      <p>{moment(task.date_created).format("MMM Do, YYYY")}</p>
    </>
  );
};

export default TaskItem;