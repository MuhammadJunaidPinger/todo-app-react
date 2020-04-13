import React, { Component } from 'react';
import'./App.css';
// import { render } from "@testing-library/react";
import HeroBtn from "./Component/HeroBtn"
class App extends Component {
  
state = {
  list: ["Dhaniya", "Podina", "Timater", "aaloo"],
  inputText: "",
  searchInput: "",
  searched_Item: []
}
addTodo () {
  const { list , inputText } = this.state

  list.push(inputText)

  this.setState({
    list,
    inputText: ""
  })
}
updateText (e) {
  this.setState({
    inputText: e.target.value
  })
}
deleteItem (index) {
  const {list} = this.state

  list.splice(index , 1)
  this.setState({
    list
  })
}
editItem(index) {
  const {list} = this.state
  let item = list[index];
  this.setState({
    inputText: item
  })
}
onsearchText(e) {
  const text = e.target.value
  const {list} = this.state

  const searched_Item = list.filter( item => {
    return item.toLowerCase().indexOf(text) !== -1
  })
  this.setState({
    searchInput: text,
    searched_Item
  })
}
  render() {
    const { inputText, list, searchInput,searched_Item } = this.state
    const loopList = searchInput ?
    searched_Item : list
    const text = "Hello world"
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
          <input placeholder = 'search here'
          onChange={this.onsearchText.bind(this)}value={searchInput} />
          
          <input placeholder='Type any todo here' 
          onChange={this.updateText.bind(this)}value={inputText} />
          <br/>        
          <button onClick={this.addTodo.bind(this)}>Add</button>
          <br/>
          {loopList.map((item , index) => {
          return <li>{item}
          <button onClick={this.deleteItem.bind(this, index)}>Delete</button>
          <button onClick={this.editItem.bind(this ,index)}>Edit</button>
          <HeroBtn />

          </li>
          })}
                      </header>
      </div>
    );
  }
}

export default App;