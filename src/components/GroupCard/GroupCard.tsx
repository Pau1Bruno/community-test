import React, { useState } from 'react';
import { Group } from "../../../types";
import styles from "./GroupCard.module.scss"
import Modal from "../Modal/Modal";

interface GroupCardProps {
    group: Group
}

const GroupCard = ({ group }: GroupCardProps) => {
    const [ visible, setVisible ] = useState(false);
    
    return (
        <div className={ styles.container }>
            <div 
                className={ styles.avatar }
                style={ { background: group.avatar_color } }
            >
            </div>
            <div className={ styles.info }>
                <p>{ group.name }</p>
                <p>{ group.closed ? "Открытая" : "Закрытая" } группа </p>
                <p>  { group.members_count } участников</p>
                { group.friends &&
                    <>
                        <button onClick={ () => setVisible(true) }> друзья: { group.friends.length }</button>
                        <Modal visible={ visible } setVisible={ setVisible } friends={ group.friends }/>
                    </>
                }
            </div>
        </div>
    );
};

export default GroupCard;