import React,{Component} from "react";

class SidebarComponent extends Component {
    render(){
        return (
            <nav className={"sideBar"}>
                <ul>
                    <li>
                        <a href="#">
                            <span></span>
                            2학년 <span>(current)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            Orders
                        </a>
                    </li>
                </ul>

                <h6>
                    <span>기타 등등</span>
                    <a href="#">
                        <span></span>
                    </a>
                </h6>
            </nav>
        )
    }

}

export default SidebarComponent;
