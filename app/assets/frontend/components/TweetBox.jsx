
import React from "react";

export default class TweetBox extends React.Component {
    sendTweet = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.sendTweet}>
                    <div className="input-field ">
                        <textarea ref="tweetTextArea" className="materialize-textarea" />
                        <label>what's happening?</label>
                        <button type="submit" className="btn right">Tweet</button>
                    </div>
                </form>
            </div>

        );
    }
}