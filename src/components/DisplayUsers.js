import React, { Component } from "react";
import "../App.css";

export default class DisplayUsers extends Component {
    state = {
        loading: true,
        profile: null,
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({profile: data.results[0], loading: false});
    }    


    render() {
        if(this.state.loading) {
            return <div>loading...</div>
        }


        const location = (`${ this.state.profile.location.street.number } ${ this.state.profile.location.street.name }, ${ this.state.profile.location.city }, ${ this.state.profile.location.country }`);
        let gender = "other";
        if(this.state.profile.gender === "male") {
            gender = "♂";
        } else if (this.state.profile.gender === "female") {
            gender = "♀";
        } else {
            ;
        }
        const title = (`${ this.state.profile.name.first } ${ this.state.profile.name.last }`);
        const email = (this.state.profile.email);

        return (
            <div>
                <div className="title">Random User Generator</div>
                <div key={ this.state.profile.name.first + this.state.profile.name.last }>
                    <div className="profile">
                        <div className="column" id="info" >
                            <div className="user-title">{ title } <span className="gender">{ gender }</span></div>
                            <div className="location">{ location }</div>
                            <div className="email">{ email }</div>
                        </div>
                        <div className="column">
                            <img id="profile-img" src={ this.state.profile.picture.large } alt="profile pic" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}