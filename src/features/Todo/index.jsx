import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {

  return (
    <Routes>
      <Route element={
        <>
        <h1>Todo Page</h1>
        <Outlet/>
        </>
      }>

      <Route index element={<ListPage/>}/>
      <Route path="/:todoId" element={<DetailPage/>}/>
      </Route>
    </Routes>
  );
}

export default TodoFeature;