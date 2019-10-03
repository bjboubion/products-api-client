import React from 'react';
import Axios from 'axios';
import ComponentCard from '../common/ComponentCard';

class ComponentsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          components: [],
          loading: false
        };
      }

      componentDidMount() {
        Axios.get(`./data/components.json`)
            .then(res => {
              const components = res.data;
              this.setState({ components });
            })
            .catch(error => console.log(error))
    
      }

    render() {
        return(
          <div className="container">
            <div className="row">
              <div className="col-12">
                { this.state.components.map((component, num) => <ComponentCard key={num} item={component} />) }
              </div>
            </div>
          </div>
        );
    }
}

export default ComponentsContainer;