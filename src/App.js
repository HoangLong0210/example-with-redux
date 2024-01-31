import React from "react";
import Main from "./components/layout/Main";
import { Route, Routes } from "react-router-dom";
import AddLink from "./components/add/AddLink";
import Home from "./components/layout/Home";
import ListLink from "./components/listLink/ListLink";
import LinkDetail from "./components/listLink/LinkDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/add"
            element={
              <>
                <AddLink></AddLink>
                <ListLink></ListLink>
              </>
            }
          ></Route>
          <Route path="/list" element={<ListLink></ListLink>}></Route>
          <Route path="/:id" element={<LinkDetail></LinkDetail>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
