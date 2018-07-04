import React from 'react';
import './App.css';




class Tagi extends Component {

    let url = "http://mobile2.tagesanzeiger.ch" +
    "/api/articles/18759961";

    constructor() {
        super();

        this.state = {
            data: {},
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {

        this.setState({ isLoading: true });

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));


    }





    render() {



    return (


      <div>
          <h1>{title}</h1>
          <img src={}/>
          <p></p>

      </div>

    );


    };
}



export default App;
