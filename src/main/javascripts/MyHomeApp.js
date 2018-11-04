import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import "./../../../node_modules/normalize.css/normalize.css"
import "../styles/base.scss"
import HeaderComponent from "./components/HeaderComponent"
import SidebarComponent from "./components/SidebarComponent";
import ViewContainer from "./components/ViewContainer";
import FooterComponent from "./components/FooterComponent";
import axios from "axios";

class MyHomeApp extends Component {
    state={
        data:undefined
    };
    changeView = (id) => {
        axios.get("/api/content/get/"+id).then((res) => {
            this.setState({data: res.data})
        })
    };

    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <SidebarComponent changeView={this.changeView}/>
                <ViewContainer viewData={this.state.data}/>
                <FooterComponent/>
            </Fragment>
        );
    }
}

ReactDOM.render(<MyHomeApp/>, document.getElementById("react"));