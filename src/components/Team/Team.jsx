import Collaborator from '../Collaborator/Collaborator'
import styles from './Team.module.scss'
import PropTypes from "prop-types"
import hexToRgba from 'hex-to-rgba';
import { memo } from 'react';

Team.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    collaborators: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChangeTheme: PropTypes.func,
    onFavorited: PropTypes.func,
}

function Team({ name, color, id, collaborators, onDelete, onChangeTheme, onFavorited }) {

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
                    onChange={(event) => onChangeTheme({
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