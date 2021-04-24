import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  //filtrowanie tasków względem tego czy są aktywne
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

  //ustawianie sortowania tablicy aktywnych alfabetycznie
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  //ustawianie sortowania tablicy wykonanych po datach wykonania
  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  //mapowanie tasków aktywnych i wykonanych
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className='active'>
        <h2>Zadania do wykonania</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>

      <hr />
      {/* wykonane */}
      <div className='done'>
        <h2>
          Zadania wykonane <em>({done.length})</em>
        </h2>
        {done.length > 5 && (
          <span>wyświetlonych jest jedynie 5 ostatnich elementów</span>
        )}
        {/* cięcie w konkretną liczbę ostatnich zadań */}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
