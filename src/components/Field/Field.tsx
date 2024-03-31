import styles from './Field.module.scss'

interface FieldProps {
    id: string;
    label: string;
    placeholderText: string;
    isRequired: boolean;
    valueToUse: string;
    onTyping: (value: string) => void;
    type?: string;
}

const Field: React.FC<FieldProps> = ({ id, label, placeholderText, isRequired, valueToUse, onTyping, type = 'text' }) => {

    function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
        onTyping(event.target.value);
    }

    return (
        <div className={`${styles.field} ${type === 'color' ? styles.fieldColor : ''}`}>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                aria-label={id}
                id={id}
                value={valueToUse}
                onChange={handleTyping}
                placeholder={placeholderText}
                required={isRequired}
            />
        </div>
    );
}

export default Field;