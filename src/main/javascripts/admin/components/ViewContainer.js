import React, {Component} from "react";
import axios from 'axios';
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

    getCsrfHeader = () => {
        const csrfHeader = document.querySelector('meta[name="_csrf_header"]').getAttribute('content');
        const csrfToken = document.querySelector('meta[name="_csrf"]').getAttribute('content');
        let headers = {
            'X-Requested-With': 'XMLHttpRequest',
        };
        headers[csrfHeader] = csrfToken;
        return headers;
    };

    onSave = () =>{
        axios.post('/api/content',this.props.viewData, {
            headers: this.getCsrfHeader()
        })
    };

    render() {
        const viewData = this.props.viewData;
        console.log(viewData)
        return (
            <main className={"viewContainer"}>
                {!!viewData && !!viewData.content &&
                <>
                    <h1>{viewData.title}</h1>
                    <button onClick={this.onSave}>저장</button>
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
                        onChange={this.props.onChangeData}
                    />
                </>}
            </main>
        )
    }
}

export default ViewContainer;