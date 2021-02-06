import React, { Component } from 'react'

export class Gacha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banner1:0,
            banner2:0,
            banner3:0,
            gachainfo: {
                title:"",
                counter:0,
                next1:0,
                next2:0,
                next3:0,
                next4:0
            }
        }
      }

      

    componentDidMount() {
        if(localStorage.getItem('banner1') !== null || localStorage.getItem('banner2') !== null || localStorage.getItem('banner3') !== null ){
            this.setState({ 
                banner1: localStorage.getItem('banner1'),
                banner2: localStorage.getItem('banner2'),
                banner3: localStorage.getItem('banner3')
            })
        }else{
            localStorage.setItem("banner1",0);
            localStorage.setItem("banner2",0);
            localStorage.setItem("banner3",0);
        }

    }

    plusBanner = (which) => {
        var count = parseInt(localStorage.getItem("banner"+which))+1;
        localStorage.setItem("banner"+which, count);

        localStorage.setItem("lastUpdate", new Date());

        
        if(which==="1"){
            this.setState({
                banner1: count
            })
        }else if(which==="2"){
            this.setState({
                banner2: count
            })
        }else if(which==="3"){
            this.setState({
                banner3: count
            })
        }

        //this.setState(this.useState[which-1]=count++);
        //this.state[which-1].setState(count++)
    }
    minusBanner = (which) => {
        var count = parseInt(localStorage.getItem("banner"+which))-1;

        localStorage.setItem("lastUpdate", new Date());
        
        if(count>=0){
            localStorage.setItem("banner"+which, count);
        

            //console.log(count);
    
            
            if(which==="1"){
                this.setState({
                    banner1: count
                })
            }else if(which==="2"){
                this.setState({
                    banner2: count
                })
            }else if(which==="3"){
                this.setState({
                    banner3: count
                })
            }
        }
        
        

        //this.setState(this.useState[which-1]=count--);
        //this.state[which-1].setState(count--)
    }
    resetBanner = (which) =>{
        if (window.confirm("Reset banner "+which+" ?")) {
            localStorage.setItem("lastUpdate", new Date());
            localStorage.setItem("banner"+which, 0);
            this.setState({ 
                banner1: localStorage.getItem('banner1'),
                banner2: localStorage.getItem('banner2'),
                banner3: localStorage.getItem('banner3')
            })
        }
    }


    render() {
        return (
            <React.Fragment>
            <div className="gacha-counter">
                <div className="banner" id="b1">
                    <div className="banner-title" onClick={ this.resetBanner.bind(this,'1') }>Limited</div>
                    <div className="banner-counter"> { this.state.banner1 } </div>
                    <div className="banner-button-group">
                        <div className="banner-button-plus" onClick={ this.plusBanner.bind(this,'1')} >+</div>
                        <div className="banner-button-minus" onClick={ this.minusBanner.bind(this,'1')} >-</div>
                    </div>
                </div>
                <div className="banner" id="b2">
                    <div className="banner-title" onClick={ this.resetBanner.bind(this,'2') }>Weapon</div>
                    <div className="banner-counter"> { this.state.banner2 } </div>
                    <div className="banner-button-group">
                        <div className="banner-button-plus" onClick={ this.plusBanner.bind(this,'2')} >+</div>
                        <div className="banner-button-minus" onClick={ this.minusBanner.bind(this,'2')} >-</div>
                    </div>
                </div>
                <div className="banner" id="b3">
                    <div className="banner-title" onClick={ this.resetBanner.bind(this,'3') }>Normal</div>
                    <div className="banner-counter"> { this.state.banner3 } </div>
                    <div className="banner-button-group">
                        <div className="banner-button-plus" onClick={ this.plusBanner.bind(this,'3')} >+</div>
                        <div className="banner-button-minus" onClick={ this.minusBanner.bind(this,'3')} >-</div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Gacha
