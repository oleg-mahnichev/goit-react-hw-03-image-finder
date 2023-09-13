import React, { Component } from 'react';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    render() {
        const { image } = this.props;

        return (
            <div className="overlay" onClick={this.props.onClose}>
                <div className="modal">
                    <img src={image} alt="" />
                </div>
            </div>
        );
    }
}

export default Modal;
