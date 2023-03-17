import { useState } from 'react';
import styles from './Recipe.module.scss';

export default function Recipe({title, img}) {
    
    console.log("Rendu du composant")
    const [liked, setLiked] = useState(false);

    function handleLikeClick() {
        setLiked(!liked)
    }

    
    return (
        <div onClick={() => setLiked(handleLikeClick)} className={styles.recipe}>
            <div className={styles.recipeImg}>
                <img src={img} alt="Image Recette" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
                <h3 className='mb-20'>{title}</h3>
                <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
            </div>
        </div>
        )
}