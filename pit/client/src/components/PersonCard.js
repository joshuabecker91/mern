import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageUp: this.props.age,
        };
    }

    render() {
        // age is used when setting up state and so we do not need to destructure it here!
        const { firstName, lastName, hair } = this.props;

        return (
            <div className="container">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.ageUp}</p>
                <p>Hair Color: {hair}</p>
                <button onClick={() => this.setState({ ageUp: this.state.ageUp + 1 })}>Birthday</button>
            </div>
        );
    }
}
export default PersonCard;