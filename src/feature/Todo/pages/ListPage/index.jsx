import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../component/TodoList';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router';
import queryString from 'query-string';
// import { useHistory } from 'react-router-dom';
import TodoForm from '../../component/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();  // Lấy thông tin URL hiện tại
  const navigate = useNavigate();  // Sử dụng useNavigate thay cho useHistory
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);  // Lấy query string từ URL
    return params.status || 'all';  // Mặc định là 'all'
  });

  useEffect(() => {
    const params = queryString.parse(location.search);  // Cập nhật trạng thái khi query string thay đổi
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',  // Chuyển trạng thái todo
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);  // Cập nhật lại danh sách todo
  };

  // Hàm thay đổi URL để lọc danh sách todo theo trạng thái 'all', 'completed', 'new'
  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };
    navigate({
      pathname: location.pathname,  // Giữ nguyên đường dẫn hiện tại
      search: queryString.stringify(queryParams),  // Thay đổi query string
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status  // Lọc danh sách todo theo trạng thái
  );

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);  // Thêm todo mới vào danh sách
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;