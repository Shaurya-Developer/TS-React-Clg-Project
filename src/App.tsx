import React, { useState } from "react";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";
import Stopwatch from "./components/StopWatch";
import "./App.css";
import Stop from "./components/Stop";
import UserStory from "./components/UserStory";
import DisplayApi from "./components/DisplayApi";

interface TODO {
  id: string;
  work: string;
}

function App() {
  // const [list, setList] = useState<TODO[]>([]);
  // const addToList = (value: string) => {
  //   setList((prevList) => [
  //     ...prevList,
  //     { id: Math.random().toString(), work: value },
  //   ]);
  // };
  // const deleteTaskHandler = (id: string) => {
  //   setList((prevList) => {
  //     return prevList.filter((task) => task.id !== id);
  //   });
  // };
  return (
    <div className="App">
      {/* <NewPost addTodo={addToList} />
      <PostsList allTasks={list} deletetask={deleteTaskHandler} /> */}
      {/* <Stopwatch /> */}
      {/* <Stop /> */}
      {/* <UserStory /> */}
      <DisplayApi />
    </div>
  );
}

export default App;
