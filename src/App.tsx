import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import { teams, inicial } from './data';
import { useLocalState } from './hooks';
import './App.css';

export default function App() {
  const [collaborators, setCollaborators] = useLocalState<any[]>("collaborators", inicial);
  const [teamsToUse, setTeamsToUse] = useLocalState<any[]>("teamsToUse", teams);

  useEffect(() => {
    setTeamsToUse(teamsToUse.map(team => {
      return team;
    }));
  }, []);

  function addCollaborators(collaborator: any) {
    setCollaborators(prevState => {
      const updatedCollaborators = [...prevState, collaborator];
      console.log(updatedCollaborators);
      return updatedCollaborators;
    });
  }

  // function removeCollaborator(id: string) {
  //   setCollaborators(prevState => {
  //     const updatedCollaborators = prevState.filter(collaborator => collaborator.id !== id);
  //     console.log(updatedCollaborators);
  //     return updatedCollaborators;
  //   });
  // }

  function handleChangeTheme({ color, id }: { color: string, id: string }) {
    setTeamsToUse(teamsToUse.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function addTeam({ name, color }: { name: string, color: string }) {
    setTeamsToUse(prevState => [...prevState, { id: uuidv4(), name, color }]);
  }

  function handleFavorite(id: string) {
    setCollaborators(prevState => prevState.map(collaborator => {
      if (collaborator.id === id) {
        collaborator.isFavorited = !collaborator.isFavorited;
      }
      return collaborator;
    }));
  }

  return (
    <>
      <Banner />
      <Form
        addTeam={addTeam}
        teamsList={teamsToUse}
        onRegisterCollaborator={collaborator => addCollaborators(collaborator)}
      />
      <h1>Minha organização</h1>
      {teamsToUse.map((team, index) => (
        <Team
          key={index}
          color={team.color}
          name={team.name}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          onDelete={removeCollaborator}
          id={team.id}
          onChangeTheme={handleChangeTheme}
          onFavorited={handleFavorite}
        />
      ))}
      <Footer />
    </>
  );
}
