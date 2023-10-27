import React from "react";

class Homework1 extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.s2 = 201;
        this.state = {
            s1: props.p1,
        };
    }
    buttonHander = () => {
        console.log("buttonHander ");
        this.s2 += 50;

        let s1Val = this.state.s1;
        s1Val += 50;

        this.setState({ s1: s1Val });
    };
    componentDidMount() {
        console.log("componentDidMount ");
        let val = this.state.s1;
        val += 5;

        this.setState({ s1: val });

        this.s2 += 5;
    }

    render() {
        console.log("render ");
        return (
            <>
                <div>
                    <button onClick={this.buttonHander}>Push</button>
                </div>
                <div>State s1: {this.state.s1}</div>
                <div>s2: {this.s2}</div>
            </>
        );
    }
}
export default Homework1;
