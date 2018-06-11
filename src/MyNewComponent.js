import React from 'react';

class MyNewComponent extends React.Component {
    render () {
        return (<div>
            <h1> This is my new component made by {this.props.name} </h1>
        </div>)
    }
}

export default MyNewComponent;
