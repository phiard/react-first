import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="nav">
                    <ul>
                        <Link to="/" onClick={this.props.pageChange.bind(this,0)}><li className="fa fa-home" style={{color: this.props.page===0? "#6699ff":"#333"}}></li></Link>
                        <Link to="/todos" onClick={this.props.pageChange.bind(this,1)}><li className="fas fa-check-square" style={{color: this.props.page===1? "#6699ff":"#333"}}></li></Link>
                        <Link to="/randomizer" onClick={this.props.pageChange.bind(this,2)}><li className="fas fa-dice" style={{color: this.props.page===2? "#6699ff":"#333"}}></li></Link>
                        <Link to="/gacha" onClick={this.props.pageChange.bind(this,3)}><li className="fas fa-star" style={{color: this.props.page===3? "#6699ff":"#333"}}></li></Link>
                        <Link to="/setting" onClick={this.props.pageChange.bind(this,4)}><li className="fas fa-cog" style={{color: this.props.page===4? "#6699ff":"#333"}}></li></Link>
                    </ul>

                </nav>
            </React.Fragment>
        )
        // <img src="psyo.png" alt="logo" className="navButt" style={navButtStyle} onClick={this.navButt}></img>
    }

}

export default Header
