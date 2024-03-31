import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import DropdownList from "../DropdownList/DropdownList";
import Field from "../Field/Field";
import styles from './Form.module.scss'

interface FormProps {
    addTeam: (team: { name: string, color: string }) => void;
    teamsList: { name: string, color: string }[];
    onRegisterCollaborator: (collaborator: { id: string, name: string, role: string, image: string, team: string }) => void;
}

export default function Form({ addTeam, teamsList, onRegisterCollaborator }: FormProps) {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const hanbleSalve = (event: React.FormEvent) => {
        event.preventDefault()
        onRegisterCollaborator({
            id: uuidv4(),
            name,
            role,
            image,
            team
        })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className={styles.form}>
            <form onSubmit={hanbleSalve}>
                <fieldset>Preencha os dados para criar o card do colaborador</fieldset>
                <Field
                    id={'user-name'}
                    label="Nome"
                    placeholderText="Digite seu nome"
                    isRequired={true}
                    valueToUse={name}
                    onTyping={value => setName(value)}
                />
                <Field
                    id={'user-role'}
                    label="Cargo"
                    placeholderText="Digite seu cargo"
                    isRequired={true}
                    valueToUse={role}
                    onTyping={value => setRole(value)}
                />
                <Field
                    id={'user-image'}
                    label="Imagem"
                    placeholderText="Digite o endereço da imagem"
                    isRequired={false}
                    valueToUse={image}
                    onTyping={value => setImage(value)}
                />
                <DropdownList
                    id={'user-select-team'}
                    isRequired={true}
                    label="Time"
                    listItems={teamsList}
                    valueToUse={team}
                    onSelectItem={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    addTeam({ name: teamName, color: teamColor })
                    //Limpar campo
                    setTeamColor('')
                    setTeamName('')
                }}
            >
                <fieldset>Preencha os dados para criar um novo time</fieldset>
                <Field
                    id={'team-name'}
                    label="Nome"
                    placeholderText="Digite o nome do time"
                    isRequired={true}
                    valueToUse={teamName}
                    onTyping={value => setTeamName(value)}
                />
                <Field
                    id={'color-team'}
                    type='color'
                    label="Cor"
                    placeholderText="Digite a cor do time [#F2F2F2]"
                    isRequired={true}
                    valueToUse={teamColor}
                    onTyping={value => setTeamColor(value)}
                />
                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}