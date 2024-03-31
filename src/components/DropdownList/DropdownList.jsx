import styles from './DropdownList.module.scss'
import PropTypes from "prop-types"

DropdownList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
    valueToUse: PropTypes.string.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    isRequired: PropTypes.bool.isRequired,
}

export default function DropdownList({ id, label, listItems, valueToUse, onSelectItem, isRequired }) {

    return (
        <div className={styles.dropdownList}>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                aria-label={id}
                value={valueToUse}
                onChange={(event) => onSelectItem(event.target.value)}
                required={isRequired}
            >
                <option value="" disabled>Selecione um time...</option>
                {
                    listItems.map((item, index) => (
                        <option key={index}>
                            {item['name']}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}