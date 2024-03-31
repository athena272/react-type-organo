import { memo } from 'react';
import styles from './Collaborator.module.scss'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export interface CollaboratorProps {
    id: string;
    name: string;
    role: string;
    image: string;
    backgroundColor: string;
    isFavorited: boolean;
    onDelete?: (id: string) => void;
    onFavorited?: (id: string) => void;
}

function Collaborator({ id, name, role, image, backgroundColor, onDelete, onFavorited, isFavorited }: CollaboratorProps) {

    function handleFavorite() {
        if (onFavorited) {
            onFavorited(id);
        }
    }

    return (
        <div className={styles.collaborator}>
            <AiFillCloseCircle
                size={35}
                onClick={() => onDelete && onDelete(id)}
                className={styles.delete}
            />
            <div className={styles.header} style={{ backgroundColor: backgroundColor }}>
                <img
                    src={image}
                    alt={name}
                    loading='lazy'
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <h4>{role}</h4>
                <div className={styles.favoritedArea}>
                    {isFavorited ?
                        <AiFillHeart
                            size={55}
                            onClick={handleFavorite}
                            className={styles.colorHeart}
                        />
                        :
                        <AiOutlineHeart
                            size={55}
                            onClick={handleFavorite}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Collaborator)