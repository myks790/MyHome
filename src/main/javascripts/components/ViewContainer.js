import React,{Component} from "react";

class ViewContainer extends Component {

    render(){
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">2학년</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                    </div>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bGVX-L6fVoE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
                <br/>
                <a href={"https://github.com/myks790/fight_game"}>깃 허브</a><br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
                소개<br/>
            </main>
        )
    }

}

export default ViewContainer;