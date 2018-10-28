import React,{Component, Fragment} from "react";
import ReactDOM from "react-dom";
import "./../../../node_modules/normalize.css/normalize.css"
import "../styles/base.scss"
import HeaderComponent from "./components/HeaderComponent"
import SidebarComponent from "./components/SidebarComponent";
import ViewContainer from "./components/ViewContainer";
import FooterComponent from "./components/FooterComponent";

class MyHomeApp extends Component{
    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <SidebarComponent/>
                <ViewContainer/>
                <FooterComponent/>
            </Fragment>
        );
    }
}

ReactDOM.render(<MyHomeApp/>, document.getElementById("react"));