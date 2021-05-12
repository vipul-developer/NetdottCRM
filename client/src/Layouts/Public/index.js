import React, { Component } from 'react';

class PublicLayout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default PublicLayout;