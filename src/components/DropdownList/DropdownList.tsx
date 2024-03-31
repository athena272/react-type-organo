import styles from './DropdownList.module.scss'

interface DropdownListProps {
    id: string;
    label: string;
    listItems: { name: string }[];
    valueToUse: string;
    onSelectItem: (value: string) => void;
    isRequired: boolean;
}

const DropdownList: React.FC<DropdownListProps> = ({ id, label, listItems, valueToUse, onSelectItem, isRequired }) => (
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
                        {item.name}
                    </option>
                ))
            }
        </select>
    </div>
)

export default DropdownList;