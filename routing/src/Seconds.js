import React from 'react';



class Seconds extends React.Component {
    constructor() {
        super();
        this.state = {
            second: 0
        };

        setInterval(() => {
            this.setState({
                second: this.state.second + 1
            });
        }, 1000);
    }
    render() {
        return<span>{this.state.second}</span>;
    }
}

export default Seconds;
