import React from 'react';
import './App.css';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import KitsContainer from './Components/Containers/KitsContainer';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import ComponentsContainer from './Components/Containers/ComponentsContainer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kits: [],
      components: [],
      loading: false
    };
  }

  componentDidMount() {
    Axios.get(`./data/kits.json`)
        .then(res => {
          const kits = res.data;
          this.setState({ kits });
          console.log(kits);
        })
        .catch(error => console.log(error))

  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/kits" component={KitsContainer} />
        <Route path="/components" component={ComponentsContainer} />
      </div>
    );
  }
}

export default App;
