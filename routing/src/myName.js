import React from 'react';


class myName extends React.Component {

    constructor() {
        super();
        this.state = {name:""};
    }

    setName(name) {
        this.setState ({name})
    }

    render() {
        return (
            <div>
                <input onKeyUp={e =>this.setName(e.target.value)}/>
        {this.state.name && <span>Hi {this.state.name}</span>}
            </div>
    )};


};


export default myName;
