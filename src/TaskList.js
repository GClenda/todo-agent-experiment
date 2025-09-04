import React from 'react';
import { TrashIcon } from '@primer/octicons-react';

const TaskList = React.memo(function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📝</div>
        <p>No tasks yet. Add a task above!</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map(task => (
          <li 
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="task-checkbox"
            />
            <span 
              className={`task-text ${task.completed ? 'completed' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="task-delete-button"
              title="Delete task"
            >
              <TrashIcon size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;