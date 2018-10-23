import React,{Component, Fragment} from "react";
import ReactDOM from "react-dom";
import "../styles/base.css"
import 'bootstrap/dist/css/bootstrap.css'
import ViewContainer from "./components/ViewContainer";
import SiderbarComponent from "./components/SiderbarComponent";

class MyHomeApp extends Component{
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">myks790</a>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <SiderbarComponent/>
                        <ViewContainer/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

ReactDOM.render(<MyHomeApp/>, document.getElementById("react"));