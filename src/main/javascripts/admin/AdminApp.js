import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/admin/base.scss'

class AdminApp extends Component {

    render() {
        return (
            <Fragment>
                <p>admin</p>
            </Fragment>
        );
    }
}

ReactDOM.render(<AdminApp/>, document.getElementById('react'));