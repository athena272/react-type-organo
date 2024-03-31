import styles from './Button.module.scss'
import PropTypes from "prop-types"

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default function Button({ children }) {

    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}