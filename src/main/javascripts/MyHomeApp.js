import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import "./../../../node_modules/normalize.css/normalize.css"
import "../styles/base.scss"
import HeaderComponent from "./components/HeaderComponent"
import SidebarComponent from "./components/SidebarComponent";
import ViewContainer from "./components/ViewContainer";
import FooterComponent from "./components/FooterComponent";
import axios from "axios";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faListAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faListAlt);

class MyHomeApp extends Component {
    state = {
        data: undefined,
        sideBarDisplayFlag: true
    };
    changeView = (id) => {
        axios.get("/api/content/get/" + id).then((res) => {
            this.setState({data: res.data})
        })
    };
    toggleSidebar = () => {
        this.setState((state) => {
            return {sideBarDisplayFlag: !state.sideBarDisplayFlag}
        });
    };

    render() {
        return (
            <Fragment>
                <HeaderComponent toggleSidebar={this.toggleSidebar}/>
                {this.state.sideBarDisplayFlag && <SidebarComponent changeView={this.changeView}/>}
                <ViewContainer viewData={this.state.data}/>
                <FooterComponent/>
            </Fragment>
        );
    }
}

ReactDOM.render(<MyHomeApp/>, document.getElementById("react"));