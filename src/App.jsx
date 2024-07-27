import React, { useState } from 'react';
import { List, Input, Button } from 'antd';
import 'antd/dist/reset.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter new todo"
        style={{ marginBottom: '10px' }}
      />
      <Button
        type="primary"
        onClick={handleAddTodo}
        style={{ marginBottom: '20px' }}
      >
        Add Todo
      </Button>
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item>
            {index + 1}. {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
