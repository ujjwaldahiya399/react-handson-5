import  { Component } from 'react'
import Example from './Components/Example';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : "Ujjwal Dahiya"
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({firstName: "vishal Pawar"}) // Here we are changing the state every 2 seconds but providing the same value everytime
      //  that is why our component is not rendering again amd again ,and this is the use of pure component. 
    },2000)
  }
  render() {
    return (
      <div className="App">
        App :-
        <div>
          <Example someData={this.state.firstName} />
        </div>
      </div>
    );
  }
}
