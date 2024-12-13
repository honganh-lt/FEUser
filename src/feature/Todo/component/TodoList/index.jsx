import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

TodoList.propTypes = {
  todoList: PropTypes.array,   // Kiểu dữ liệu là mảng
  onTodoClick: PropTypes.func, // Kiểu dữ liệu là hàm
};

TodoList.defaultProps = {
  todoList: [],     // Mặc định là mảng rỗng
  onTodoClick: null, // Mặc định không có hàm nào
};

function TodoList({ todoList, onTodoClick }) {
  // Hàm này được gọi khi người dùng click vào một todo
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;  // Nếu không có hàm onTodoClick thì không làm gì
    onTodoClick(todo, idx);     // Gọi hàm onTodoClick và truyền todo và index
  };

  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => (
        <li 
          key={todo.id}
          className={classNames({
            'todo-item': true,           // Luôn luôn có lớp 'todo-item'
            'completed': todo.status === 'completed', // Nếu todo có trạng thái 'completed' thì thêm lớp 'completed'
          })}
          onClick={() => handleTodoClick(todo, idx)} // Xử lý sự kiện khi click vào todo
        >
          {todo.title} {/* Hiển thị tiêu đề todo */}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
