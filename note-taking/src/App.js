import "./App.css";
import TaskItem from "./components/TaskItem";
import TaskEdit from "./components/TaskEdit";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import moment from "moment";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
`;

const DivLeft = styled.div`
  width: 30%;
`;

const DivRight = styled.div`
  width: 70%;
  padding: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  clear: both;
`;

const Li = styled.div`
  padding: 15px;
  ${(props) => 
    props.active && 
    css`
      background: #cdcdcd;
    `}
`;

const Button = styled.button`
  border: 1px solid #cdcd;
  float: right;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const debounce = (fn, time) => {
  let timeout;
  debugger;
  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
};


function App() {
  const link = "https://forested-crystalline-bonobo.glitch.me/";
  // PUThttps://forested-crystalline-bonobo.glitch.me/:id
  // POST https://forested-crystalline-bonobo.glitch.me/
  const [ tasks, setTasks ] = useState([]);
  const [ taskEdit, setTaskEdit ] = useState({});
  
  const fetchCall = async() => {
    const response = await fetch(link);
    const data = await response.json();
    setTasks(data);
    setTaskEdit(data[0]); // firstItem on initial fetch
  };

  const updateCall = (id, task) => {
    let taskIndex = -1;
    let currTask = {};
    tasks.forEach((item, index) => {
      if (item.id === task.id) {
        taskIndex = index;
        currTask = item;
      }
    });
    const editTask = {
      ...currTask,
      ...task,
    }; // new task
    // optimistically update
    tasks[taskIndex] = editTask;
    setTasks([...tasks]);
    setTaskEdit(editTask);
    const url = `https://forested-crystalline-bonobo.glitch.me/${id}`;
    debounce(() => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...task,
          date_created: moment(new Date()).utc().format(),
        })
      });
    }, 10)();
  };

  const createCall = async() => {
    const response = await fetch('https://forested-crystalline-bonobo.glitch.me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: '',
        content: '',
        date_created: moment(new Date()).utc().format(),
      }) // body data type must match "Content-Type" header
    });
    const data = await response.json();
    setTaskEdit(data);
    setTasks([data, ...tasks]);
  };

  useEffect(() => {
    fetchCall();
  }, []);

  const taskOnClick = (currTask) => {
    setTaskEdit(currTask);
  };

  const handleContentOnChange = (id, value) => {
    const task = {
      id,
      content: value,
    };
    updateCall(id, task);
  };

  const handleTitleOnChange = (id, value) => {
    const task = {
      id,
      title: value,
    };
    updateCall(id, task);
  };

  const createTask = async() => {
    await createCall();
  };

  const onDelete = async(task) => {
    const url = `https://forested-crystalline-bonobo.glitch.me/${task.id}`;
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const newArr = tasks.filter(item => item.id !== task.id);
    setTasks([...newArr]);
    setTaskEdit(newArr[0]);
  };

	return (
		<Container>
      <DivLeft>
        <TitleDiv>
          <h1>Forethought Note</h1>
          <Button onClick={createTask}>
            <img src={process.env.PUBLIC_URL + '/assets/add-new-icon.svg'} alt="create" />
          </Button>
        </TitleDiv>
        {tasks.length > 0 && <Ul>
          {tasks.map(task => {
            return (
              <Li key={task.id} active={task.id === taskEdit.id} onClick={() => taskOnClick(task)}>
                <TaskItem task={task}/>
              </Li>
            );
          })}
        </Ul>
      }
      </DivLeft>
      <DivRight>
        <TaskEdit task={taskEdit} handleContentOnChange={handleContentOnChange} handleTitleOnChange={handleTitleOnChange} onDelete={() => onDelete(taskEdit)} />
      </DivRight>
		</Container>
	);
}

export default App;
