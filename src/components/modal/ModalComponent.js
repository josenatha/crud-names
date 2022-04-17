import React from 'react';
import '../../style/modal/ModalComponent.css';
import ModalClosebtn from './ModalClosebtn';
import ModalHeader from './ModalHeader';

const ModalComponent = ({ children, show, setShow, header=false, title}) => {
    return (
        <>
            { show &&
            <div className='overlay' >
                <div className='modalContainer' >
                    { header &&
                        <ModalHeader title={ title } />
                    }
                    
                    <ModalClosebtn setShow={ setShow } />

                    {children}

                </div>
            </div>
            }
        </>
    )
}

export default ModalComponent;