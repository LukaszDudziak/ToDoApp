import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  //counter powinien się zaczynać od 0, ale jako że mam inne elementy do 8 to wiadomo
  counter = 9;
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
        active: false,
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

    //pierwsza opcja - findIndex

    // //kopia tablicy
    // const tasks = [...this.state.tasks];
    // //znalezienie odpowiedniego indexu odpowiadającemu id klikniętego elementu
    // const index = tasks.findIndex((task) => task.id === id);
    // //usunięcie konkretnego elementu z tablicy
    // tasks.splice(index, 1);
    // //wbicie nowej tablicy w state
    // this.setState({
    //   tasks,
    // });

    //druga opcja - filter

    let tasks = [...this.state.tasks];
    //tworzę tablicę tasks ze wszystkimi elementami, które nie pasują przez id do elementu klikniętego
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("done o id: " + id);
    //kopia tablicy
    const tasks = Array.from(this.state.tasks);
    //iteracja po tablicy
    tasks.forEach((task) => {
      //zmiana właściwości active pojedynczego taska z nowej tablicy
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  //metoda dodawania tasków
  addTask = (text, date, important) => {
    const task = {
      id: this.counter, //kolejny id z countera
      text, //tekst z inputa
      date, //data z inputa
      important, //check z inputa
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);
    this.setState((prevState) => ({
      //dodanie taska do state poprzez utworzenie nowej tablicy tasks, złożonej z prevState powiększonego o pojedynczy nowy task
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <div className='App'>
        <h1>ToDoApp</h1>
        <AddTask add={this.addTask} />{" "}
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
