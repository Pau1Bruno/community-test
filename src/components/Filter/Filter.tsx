import React from 'react';
import styles from "./Filter.module.scss"

export interface FilterForm {
    closed: boolean | string;
    avatar_color: string;
    friends: string;
}

interface FilterProps {
    filter: FilterForm;
    setFilter: React.Dispatch<FilterForm>;
}

const Filter = ({ filter, setFilter }: FilterProps) => {
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log(e.target.value)
        setFilter({ ...filter, [ e.target.name ]: e.target.value })
    };
    
    return (
        <div className={ styles.container }>
            <select name="closed" onChange={ handleSelect }>
                <option value="" disabled>Тип приватности</option>
                <option value="">Все</option>
                <option value="open">Открытая</option>
                <option value="close">Закрытая</option>
            </select>
            
            <select name="avatar_color" onChange={ handleSelect }>
                <option value="" disabled>Цвет группы</option>
                <option value="">Все</option>
                <option value="red">Красный</option>
                <option value="green">Зелёный</option>
                <option value="yellow">Жёлтый</option>
                <option value="purple">Фиолетовый</option>
                <option value="orange">Оранжевый</option>
                <option value="white">Белый</option>
            </select>
            
            <select name="friends" onChange={ handleSelect }>
                <option value="" disabled>Наличие друзей</option>
                <option value="">Все</option>
                <option value="with_friends">Есть друзья</option>
                <option value="no_friends">Нет друзей</option>
            </select>
        </div>
    );
};

export default Filter;