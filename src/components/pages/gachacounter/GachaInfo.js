import React from 'react'


export default function GachaInfo() {

    

    this.state = {
        title:"",
        counter:0,
        next1:0,
        next2:0,
        next3:0,
        next4:0
      };

    return (
        <div className="gacha-info">
            <div className="gacha-info-title">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.title} </span>
                <span> day(s)</span>
            </div>
            <div className="gacha-info-count">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.counter} </span>
                <span> day(s)</span>
            </div>
            <div className="gacha-info-next1">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.next1} </span>
                <span> day(s)</span>
            </div>
            <div className="gacha-info-next2">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.next2} </span>
                <span> day(s)</span>
            </div>
            <div className="gacha-info-next3">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.next3} </span>
                <span> day(s)</span>
            </div>
            <div className="gacha-info-next4">
                <span>Next 5<i className="fa fa-star"></i> in </span>
                <span> { this.state.gachainfo.next4} </span>
                <span> day(s)</span>
            </div>
        </div>
    )
}
