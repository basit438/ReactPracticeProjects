import React from 'react';

const TaskItem = ({ task, index, deleteTask, toggleCompletion }) => {
  return (
    <li className={task.completed ? 'completed' : ''} onClick={() => toggleCompletion(index)}>
      {task.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(index);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
