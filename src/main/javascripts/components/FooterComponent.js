import React, {Component} from "react"


class FooterComponent extends Component {
    render() {
        return (
            <footer className={"footer"}>
                <div>
                    <p>Copyright 2018. <a href={"https://github.com/myks790"}>myks790</a></p>
                    <p>이 페이지의 소스코드는 <a href={"https://github.com/myks790/MyHome"}>이 곳</a>에서 볼 수 있습니다.</p>
                </div>
            </footer>)
    }
}

export default FooterComponent;

