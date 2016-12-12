import React, { Component } from 'react';
import { getAllBeers, addBeer } from '../service/aws_gateway_api.js';


export default class Form extends Component {

    conponentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    gotAllBeers(data) {
        var foo = JSON.parse(data.body);
        console.log('Form.js. gotAllBeers. foo:', foo);
        this.setState({beer: foo.Items});
    }

    addCallback(data) {
      console.log('Form.js. addCallback. data: ', data);
      getAllBeers(this.gotAllBeers.bind(this));
    }

    handleRateClick(rateLabel) {

        addBeer( rateLabel, 
                 this.refs.beerName.value, 
                 this.refs.beerBrewery.value,
                 this.refs.beerType.value,
                 this.refs.beerNotes.value,
                 this.addCallback.bind(this)
               );
    }

    render() {

        return (
        <div className="container">
          <div className="row">
            <div><input type="text" className="twelve columns foo" ref="beerName" placeholder="name"/></div>
          </div>
          <div className="row">
            <div><input type="text" className="twelve columns foo" ref="beerBrewery" placeholder="brewery"/></div>
          </div>
          <div className="row">
            <div><input type="text" className="twelve columns foo" ref="beerType" placeholder="type"/></div>
          </div>
          <div className="row">
            <div><input type="text" className="twelve columns foo" ref="beerNotes" placeholder="notes"/></div>
          </div>
          <div className="row rateButtons">
            <div className="one column">&nbsp;</div>
            <div className="two columns rate fave" onClick={this.handleRateClick.bind(this, 'fave')}>fave</div>
            <div className="two columns rate like" onClick={this.handleRateClick.bind(this, 'like')}>like</div>
            <div className="two columns rate beer" onClick={this.handleRateClick.bind(this, 'beer')}>beer</div>
            <div className="two columns rate meh"  onClick={this.handleRateClick.bind(this, 'meh')}>meh</div>
            <div className="two columns rate no"   onClick={this.handleRateClick.bind(this, 'no')}>no</div>
          </div>
        </div>);
    }
}

