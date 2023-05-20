import React, {useState} from 'react';
import styles from './ColorPicker.module.scss';
import ColorDot from "@/components/ColorDot/ColorDot";

interface IColorPickerProps {
    colors: string[]
    changeImage: React.Dispatch<React.SetStateAction<number>>;
}

function ColorPicker({colors, changeImage}: IColorPickerProps) {
    const [dots, setDots] = useState(() => {
        return colors.map( (el, index) => index === 0)
    });


    return (
        <div className={styles.picker}>
            <p className={styles.picker__text}>Choose your color</p>
            <div className={styles.colors}>
                {
                    colors.map((color, index) => {
                        return (
                            <ColorDot
                                key={color}
                                color={color}
                                position={index}
                                dots={dots}
                                syncDots={setDots}
                                syncImage={changeImage}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ColorPicker;
