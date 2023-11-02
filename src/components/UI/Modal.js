import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM  from 'react-dom';

const Backdrop = (Props) =>{
    return <div className={classes.backdrop} onClick={props.onclose}/>
};

const ModalOverlay = (Props) =>{
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = props => {
 return(
<Fragment>
    {ReactDOM.createPortal(<Backdrop onclose={props.onclose} />,portalElement )}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> )}
    {/* <Backdrop/>
    <ModelOverlay> {props.children}</ModelOverlay> */}
</Fragment>
 );
};

export default Modal;