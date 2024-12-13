import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import CounterFeature from './feature/Counter';
import './App.css';
import Header from 'component/Header';
import ProductFeature from 'feature/Product/pages/ListPage';
import Header2 from 'component/Header2';
import ExamFeature from 'feature/Exam';
import Products2Feature from 'feature/Products2';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' && <Header />}
      {location.pathname !== '/' && <Header2 />}
      
      <Routes>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/exams" element={<ExamFeature />} />
        <Route path="/products" element={<ProductFeature />} />
        <Route  path='/products2' element={<Products2Feature />}/>
      </Routes>
    </div>
  );
}

// function Main() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

export default App;