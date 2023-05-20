import React, {useEffect, useState} from 'react';
import styles from './ColorDot.module.scss';

interface IColorDotProps {
    color: string;
    position: number;
    dots: boolean[];
    syncDots: React.Dispatch<React.SetStateAction<boolean[]>>;
    syncImage: React.Dispatch<React.SetStateAction<number>>;
}

function ColorDot({color, position, dots, syncDots, syncImage}: IColorDotProps) {
    console.log(dots)

    const updateDots = (current: boolean[]) => {
        current.fill(false)
        current[position] = true
        return current
    }

    const toggleDot = () => {
        syncImage(position)
        syncDots(updateDots(dots))
    }

    return (
        <div
            onClick={toggleDot}
            className={dots[position] ? styles.dot + ' ' + styles.dot_active : styles.dot}
            style={{backgroundColor: color}}
        />
    );
}

export default ColorDot;
