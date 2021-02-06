import React, { Component } from 'react'

class Randomizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          min: 1,
          max: 100,
          number: 1
        }
      }


    generateNumber = (min, max) => {
      var num = Math.floor(Math.random() * (max - min));
      num+= parseInt(min);
      return num;
    }

    componentDidMount() {
        this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
    }
    
    minChange = (event) => {
        this.setState({ min: event.target.value})
    }
    
    maxChange = (event) => {
        this.setState({ max: event.target.value})
    }
    
    getInputs = () => {
        if(this.state.min > this.state.max ){
          const minTemp = this.state.min
          const maxTemp = this.state.max
          this.setState(
          { 
            min: maxTemp,
            max: minTemp
          }, () =>
            this.setState({
              number: this.generateNumber(this.state.min, this.state.max)  
            })
          );
        } else {
          this.setState({
            number: this.generateNumber(this.state.min, this.state.max)  
          })
        }
      }


    render() {


        return (
            <div className="randomizer">
                <div className="result"> { this.state.number }</div>
                <div className="minmax">
                    
                    <div className="inside">
                        <span >MIN</span>
                        <input id="min" min="-9999999999" max="9999999999" type="number" value={ this.state.min } onChange={this.minChange} />
                    </div>
                    <div className="inside">
                        <span >MAX</span> { " " }
                        <input id="max" min="-9999999999" max="9999999999" type="number" value={ this.state.max } onChange={this.maxChange} />
                    </div>
                </div>
                <button className="btn" onClick={this.getInputs}>GO</button>
            </div>
        )
    }
}


export default Randomizer
