import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zadanie",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "coś ugotować",
        date: "2021-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "z kimś się spotkać",
        date: "2021-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "coś zobaczyć",
        date: "2022-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "gdzieś pojechać",
        date: "2023-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "coś poćwiczyć",
        date: "2024-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "w coś pograć",
        date: "2022-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "coś odebrać",
        date: "2021-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "coś kupić",
        date: "2320-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete o id: " + id);
  };

  changeTaskStatus = (id) => {
    console.log("done o id: " + id);
  };
  render() {
    return (
      <div className='App'>
        todo <AddTask />{" "}
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
