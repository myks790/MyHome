import React, {Component} from "react"


class HeaderComponent extends Component{

    render(){
        return (
            <header className={"header"}>
                <div className={"titleBar"}>
                    <a href="https://github.com/myks790">myks790</a>
                </div>
                <div className={"topBar"}>
                    <button className={"sideMenuButton"} >메뉴</button>
                </div>
            </header>)
    }

}


export default HeaderComponent;

