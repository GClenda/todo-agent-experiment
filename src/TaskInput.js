import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="task-input-form">
      <form onSubmit={handleSubmit}>
        <div className="task-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (showError) setShowError(false);
            }}
            placeholder="Enter a new task..."
            className={`task-input ${showError ? 'error' : ''}`}
          />
          <button 
            type="submit"
            className="task-input-button"
          >
            Add Task
          </button>
        </div>
        {showError && (
          <div className="task-input-error">
            Please enter a valid task
          </div>
        )}
      </form>
    </div>
  );
}

export default TaskInput;