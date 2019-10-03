import React from 'react';
import Axios from 'axios';
import KitCard from '../common/KitCard';

class KitsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          kits: [],
          loading: false
        };
      }

      componentDidMount() {
        Axios.get(`./data/kits.json`)
            .then(res => {
              const kits = res.data;
              this.setState({ kits });
            })
            .catch(error => console.log(error))
    
      }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                { this.state.kits.map((kit, num) => <KitCard key={num} item={kit} />) }
              </div>
            </div>
          </div>
        );
    }
}

export default KitsContainer;