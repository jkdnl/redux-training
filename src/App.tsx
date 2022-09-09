import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import UserList from "./components/UserList";
import UserTodosPage from "./components/UserTodosPage";


function App() {

    return (
      <>
        <Routes>
          <Route index element={<UserList />} />
          <Route path="user/:id" element={<UserTodosPage  />} />
        </Routes>
      </>
    );
}

export default App;
