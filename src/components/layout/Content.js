import Recipe from '../Recipe';
import styles from './Content.module.scss';
import {data} from '../../data/recipes';
import { useState } from 'react';

export default function Content() {

    const recipes = data;
    const [filter, setFilter] = useState('');

    function handleInput (event) {
        setFilter(event.target.value.trim().toLowerCase());
    }

    return <div className="flex-fill container">
        <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
            <div className={`card p-20 my-30 d-flex flex-column ${styles.contentCard}`}>
                <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchbar}`}>
                    <i className="fa-solid fa-magnifgying-glass"></i>
                    <input onInput={handleInput} type="text" name='search' id='search' className='flex-fill' placeholder='Search' />
                </div>
                <div className={styles.grid}>
                    {recipes.filter(recipe => recipe.title.toLowerCase().startsWith(filter)).map(({_id, title, image}) => <Recipe key={_id} title={title} img={image} />)}
                </div>
        </div>
    </div>
}