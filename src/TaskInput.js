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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (showError) setShowError(false);
        }}
        placeholder="Enter a new task..."
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
          border: showError ? '2px solid #dc3545' : '1px solid #ccc'
        }}
      />
      <button 
        type="submit"
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Add Task
      </button>
      {showError && (
        <div style={{
          color: '#dc3545',
          fontSize: '14px',
          marginTop: '5px'
        }}>
          Please enter a valid task
        </div>
      )}
    </form>
  );
}

export default TaskInput;