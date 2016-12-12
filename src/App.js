import React, { Component } from 'react';
// import { createStore} from 'redux';
// import { storeReducer } from './reducer/storereducer.js';
import './App.css';
import Form from './component/Form.js';
import List from './component/List.js';
// import { addBeer } from './service/aws_gateway_api.js';
import './skeleton/css/skeleton.css';
import './skeleton/css/normalize.css';


class App extends Component {
  construct() {
      console.log('App.js. constructor');
  }

    render() {

        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="title twelve columns">Beer? Beer.</div>
              </div>
    
              <div className="row">
                <div className="five columns">&nbsp;
                  <Form />
                </div>
    
                <div className="seven columns">
                  <List />
                </div>
              </div>
    
            </div>
          </div>
        );
    }

}

export default App;
