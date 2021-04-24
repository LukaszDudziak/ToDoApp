import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  //funkcja dodawania musi znajdować się tutaj ponieważ chcę żeby w momencie kliknięcia "dodaj" cały formularz został wyczyszczony. Może się tak wydarzyć tylko wtedy, kiedy mam dostęp do state.
  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 3) {
      //przechwycenie funkcji dodającej taski z przekazaniem wartości z formularza
      const add = this.props.add(text, date, checked);
      //czyszczenie formularza po dodaniu taska
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Za krótka treść");
    }
  };

  render() {
    //mnożenie "parsuje"
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    //ograniczenie daty na kolejny rok
    maxDate = maxDate + "-12-31";
    return (
      <div className='form'>
        <input
          type='text'
          placeholder='dodaj zadanie'
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type='checkbox'
          checked={this.state.checked}
          id='important'
          onChange={this.handleCheckbox}
        />
        <label htmlFor='important'>Priorytet</label>
        <br />
        <input
          type='date'
          name=''
          id='date'
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <label htmlFor='date'>Do kiedy wykonać</label>
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
