import React , {Component} from 'react';
import './App.css';
import { CarList } from './Components/Card-list/card-list.component';
import { SearchCard } from './Components/Search-Card/search-card.component';

class  App extends Component {

constructor(){
  super();
  this.state = {
    monsters:[],
    selectedMonster:''
  }

}

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({monsters : users}));
 }

 handlechange = e => {
   this.setState({selectedMonster:e.target.value})
}


  render() {

    const { monsters, selectedMonster} = this.state;
    const filteredArray = monsters.filter( m => m.name.toLowerCase().includes(selectedMonster.toLowerCase()));

    return (
      <div className="App">
      <SearchCard placeholder='Search Monsters' handlechange={this.handlechange}  />
      <CarList monsters = {filteredArray}/>
      </div>
    );
  }
 
}

export default App;
