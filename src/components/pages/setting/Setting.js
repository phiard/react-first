import React, { Component } from 'react'

export class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastUpdate: "0"
        }
      }

      componentDidMount(){
        var d = new Date(localStorage.getItem("lastUpdate")),
    dformat = [d.getFullYear(),
               d.getMonth()+1,
               d.getDate()].join('-')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');


          this.setState({lastUpdate: dformat})
      }


    render() {
        return (
            <div className="setting">
                <div className="setting-item">
                    <span><i className="fa fa-clock"></i> Last Update </span>
                    <span> { this.state.lastUpdate } </span>
                </div>
                <div className="setting-item">
                    <span><i className="fa fa-undo"></i> Reset data</span>
                    <span> <button onClick={ 
                        ()=> { if(window.confirm("Sure? 🤔")){
                            localStorage.clear()
                        }}
                        }>Reset</button> </span>
                </div>
            </div>
        )
    }
}

export default About
