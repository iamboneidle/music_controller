import React, {Component} from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{'position': 'absolute',
                         'top': '50%', 
                         'left': '50%', 
                         'transform': 'translate(-50%, -50%)'
                         }}>
                <HomePage />
            </div>
        )
    }
}

const appDiv = document.getElementById('app');

render(<App/>, appDiv)
