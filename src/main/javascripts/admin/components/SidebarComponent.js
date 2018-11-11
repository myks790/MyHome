import React, {Component} from "react";
import axios from "axios";

class SidebarComponent extends Component {
    state = {
        data: []
    };

    componentDidMount(props) {
        axios.get("/api/sideMenu/list").then((res) => {
            this.setState({data: res.data})
        })
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.changeView(e.currentTarget.dataset.id);
    };

    render() {
        return (
            <nav className={"sideBar"}>
                <ul>
                    {this.state.data.map((item) => {
                        return (
                            <li key={item.id} data-id={item.id} onClick={this.onClick}>
                                <a href="">
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}

export default SidebarComponent;
