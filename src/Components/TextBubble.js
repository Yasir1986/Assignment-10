import React, { Component } from 'react';
// import TextBubble from './RecentWorkCard';

class TextBubble extends Component {
    render() {
        return (
            <div className="TextBubble">
                <h4>{this.props.title}</h4>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default TextBubble;