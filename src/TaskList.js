import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add a task above!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li 
          key={task.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ddd',
            marginBottom: '5px',
            backgroundColor: task.completed ? '#f0f0f0' : 'white'
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            style={{ marginRight: '10px' }}
          />
          <span 
            style={{
              flex: 1,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : 'black'
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            style={{
              padding: '4px 8px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;