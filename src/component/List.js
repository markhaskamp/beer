import React, { Component } from 'react';
import { getAllBeers } from '../service/aws_gateway_api.js';


export default class List extends Component {

    componentDidMount() {
        getAllBeers(this.gotAllBeers.bind(this));
    }

    gotAllBeers(data) {
        var foo = JSON.parse(data.body);
        this.setState({beer: foo.Items});
    }

    paintRatingSection(rating) {

      var filtered = this.state.beer.filter(function(b) { 
        return b.rate === rating 
      });
      return (
          <div className="row">
            {filtered.map(function(b,i) {
              return (<div className="listItem" key={b.name}>{b.name}, <i>{b.brewery}</i></div>)
            })}
          </div>)
    }


    render() {
      if (this.state === null) {
        return <div/>
      } else {
        
        return (
            <div>
              <div className="container">
                <div className="row fave listHeader">Fave</div>
                {this.paintRatingSection('fave')}
              </div>
  
              <div className="container">
                <div className="row like listHeader">Like</div>
                {this.paintRatingSection('like')}
              </div>
  
              <div className="container">
                <div className="row beer listHeader">Beer</div>
                {this.paintRatingSection('beer')}
              </div>
  
              <div className="container">
                <div className="row meh listHeader">Meh</div>
                {this.paintRatingSection('meh')}
              </div>
  
              <div className="container">
                <div className="row no listHeader">No</div>
                {this.paintRatingSection('no')}
              </div>
            </div>
        )

    }
  }
}

