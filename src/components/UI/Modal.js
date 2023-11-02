import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM  from 'react-dom';

const Backdrop =Props =>{
    return<div className={classes.backdrop}/>
};

const ModelOverlay =Props =>{
    return<div className={classes.model}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlay');

const Modal = props => {
 return(
<Fragment>
    {ReactDOM.createPortal(<Backdrop />,portalElement )}
    {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay> )}
    {/* <Backdrop/>
    <ModelOverlay> {props.children}</ModelOverlay> */}
</Fragment>
 );
};

export default Modal;