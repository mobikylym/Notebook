import styles from './SelectTags.module.scss'

const SelectTags = ({setTags}: {setTags: (value: string) => void}) => {

    return (
        <div className={styles['form__tags-block']}>
            <label className={styles['label-title']}>Выбрать тег поста:</label>
            <select className={styles.select} onChange={(e) => setTags(e.target.value)}>
                <option value="sport">sport</option>
                <option value="nature">nature</option>
                <option value="food">food</option>
                <option value="games">games</option>
                <option value="travel">travel</option>
                <option value="places">places</option>
            </select>
        </div>
    )
}

export default SelectTags;