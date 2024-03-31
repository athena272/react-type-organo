import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => (
    <button className={styles.button}>
        {children}
    </button>
)

export default Button
