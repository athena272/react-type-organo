import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}
