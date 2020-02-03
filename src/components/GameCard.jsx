import React from 'react'
import styles from './gameCard.css'
const GameCard = (props) => {
    return (
        <div className={'eight wide column ${styles.card}'}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.src}/>
            </div>
            <div className={styles.description}>
                    <div className={styles.heading}>
                        {props.name}
                    </div>
                    {/* <div className={style}>
                        
                    </div> */}
            </div>
        </div>
    )
}

export default GameCard