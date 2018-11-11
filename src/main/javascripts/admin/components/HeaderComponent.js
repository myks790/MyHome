import React, {Component} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class HeaderComponent extends Component {
    render() {
        return (
            <header className={"header"}>
                <div className={"titleBar"}>
                    <button className={"sideMenuButton"} onClick={this.props.toggleSidebar}>
                        <FontAwesomeIcon icon="list-alt"/>
                    </button>
                    <a href="https://github.com/myks790">myks790</a>
                </div>
                <div className={"topBar"}>
                    <button className={"sideMenuButton"}>메뉴</button>
                </div>
            </header>)
    }
}


export default HeaderComponent;

