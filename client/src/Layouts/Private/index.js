import React, { Component } from 'react';

class PrivateLayout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default PrivateLayout;