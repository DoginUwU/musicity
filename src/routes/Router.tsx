import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Search from '../views/Search';

const Router: React.FC = function () {
  return (
    <Routes location="/">
      <Route index element={<Home />} />
      <Route path="/search/:name" element={<Search />} />
    </Routes>
  );
};

export default Router;
