import Collaborator, { CollaboratorProps } from '../Collaborator/Collaborator'
import styles from './Team.module.scss'
import hexToRgba from 'hex-to-rgba';
import { memo } from 'react';

export interface TeamProps {
    name: string;
    color: string;
    id: string;
    collaborators: CollaboratorProps[]; // Use a interface CollaboratorProps para tipar a lista de colaboradores
    onDelete?: (id: string) => void;
    onChangeTheme?: (theme: { color: string, id: string }) => void;
    onFavorited?: (id: string) => void;
}

function Team({ name, color, id, collaborators, onDelete, onChangeTheme, onFavorited }: TeamProps) {

    return (
        collaborators.length > 0 && (
            <section
                className={styles.team}
                style={{
                    backgroundColor: hexToRgba(color, '0.5'),
                    backgroundImage: 'url(/assets/fundo.png)',
                }}
            >
                <label htmlFor={id}></label>
                <input
                    onChange={(event) => onChangeTheme && onChangeTheme({
                        color: event.target.value,
                        id,
                    })}
                    id={id}
                    aria-label={id}
                    value={color}
                    type="color"
                    className={styles.inputColor}
                />
                <h2 style={{ borderColor: color }}>{name}</h2>
                <div className={styles.collaborators}>
                    {
                        collaborators.map((collaborator, index) => (
                            <Collaborator
                                key={index}
                                name={collaborator['name']}
                                role={collaborator['role']}
                                image={collaborator['image']}
                                backgroundColor={color}
                                id={collaborator['id']}
                                isFavorited={collaborator['isFavorited']}
                                onDelete={onDelete}
                                onFavorited={onFavorited}
                            />
                        ))
                    }
                </div>
            </section>
        )
    )
}

export default memo(Team)