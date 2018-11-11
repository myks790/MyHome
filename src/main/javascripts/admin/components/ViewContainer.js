import React, {Component} from "react";
import renderHTML from 'react-render-html';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css';
import 'react-summernote/lang/summernote-ko-KR';

import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';


class ViewContainer extends Component {
    static defaultProps = {
        viewData: {
            title: "",
            content:""
        }
    };

    render() {
        const viewData = this.props.viewData;
        console.log(viewData)
        return (
            <main className={"viewContainer"}>
                {!!viewData && !!viewData.content &&
                <>
                    <h1>{viewData.title}</h1>
                    <ReactSummernote
                        className={"summernote"}
                        value={viewData.content}
                        options={{
                            lang: 'ko-KE',
                            dialogsInBody: true,
                            toolbar: [
                                ['style', ['style']],
                                ['font', ['bold', 'underline', 'clear']],
                                ['fontname', ['fontname']],
                                ['para', ['ul', 'ol', 'paragraph']],
                                ['table', ['table']],
                                ['insert', ['link', 'picture', 'video']],
                                ['view', ['fullscreen', 'codeview']]
                            ]
                        }}
                        onChange={this.onChange}
                    />
                </>}
            </main>
        )
    }
}

export default ViewContainer;