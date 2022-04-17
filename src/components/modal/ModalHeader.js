import React from 'react';
import '../../style/modal/ModalHeader.css';

const ModalHeader = ({ title }) => {
    return (
        <div className='modalHeader' >
            <h3> {title} </h3>
        </div>
    )
}

export default ModalHeader