import React from 'react';
import { User } from "../../../types";
import styles from "./Modal.module.scss";

interface ModalProps {
    friends: User[];
    visible: boolean;
    setVisible: React.Dispatch<boolean>;
}

const Modal = ({ friends, visible, setVisible }: ModalProps) => {
    const rootClasses = [ styles.modal ];
    if ( visible ) rootClasses.push(styles.active);
    
    
    return (
        
        <div className={ rootClasses.join(' ') } onClick={ () => setVisible(false) }>
            <div className={ styles.content } onClick={ event => event.stopPropagation() }>
                { friends.map((friend, index) =>
                    <div key={friend.first_name + friend.last_name + index} className={styles.friend}>
                        <p>{ friend.first_name } { friend.last_name }</p>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Modal;