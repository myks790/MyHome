import React, {Component} from "react";
import renderHTML from 'react-render-html';

class ViewContainer extends Component {
    static defaultProps = {
        viewData: {
            title: "",
            content:""
        }
    };

    render() {
        const viewData = this.props.viewData;
        return (
            <main className={"viewContainer"}>
                {!!viewData && <>
                    <h1>{viewData.title}</h1>
                    {renderHTML(viewData.content)}
                </>}
            </main>
        )
    }
}

export default ViewContainer;