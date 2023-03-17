import styles from './Recipe.module.scss';
import recipeImg from '../assets/images/pavlova.jpg';

export default function Recipe() {
    return <div className={styles.recipe}>
            <div className={styles.recipeImg}>
                <img src={recipeImg} alt="Image Recette" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
                <h3>Pavlova Express</h3>
            </div>
        </div>
}