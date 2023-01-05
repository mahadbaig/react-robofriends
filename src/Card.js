import React from "react";

class Card extends React.Component{
    render(){
        const {name, email, id} = this.props
        return(
            <div className="tc bg-light-red dib  br3 pa4 ma3 grow bw2">
                <img src={`https://robohash.org/${id}`} alt="robots"/>

                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card