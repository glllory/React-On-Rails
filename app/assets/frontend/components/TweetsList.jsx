
import React from "react";
import Tweet from "./Tweet";

export default class TweetsList extends React.Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </ul>
            </div>
        );
    }
}