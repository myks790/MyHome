import React,{Component} from "react";
import ReactDOM from "react-dom";


class MyHomeApp extends Component{
    render() {
        return (
            <div>
                hello react
            </div>
        );
    }
}

ReactDOM.render(<MyHomeApp/>, document.getElementById("react"));