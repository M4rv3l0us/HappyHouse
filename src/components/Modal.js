import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        console.log('Modal constructor');
    }
    componentWillMount(){
        this.state.modal=  this.props.modal;
        console.log('Modal render');
    }
    toggle(){
        this.setState({
            modal : !this.state.modal
        })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader toggle={() => this.toggle()}>Login Successful</ModalHeader>
                    <ModalBody>
                        <h3>Hello PM</h3>
        </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.toggle()}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        );
    }
}

export default ModalExample;