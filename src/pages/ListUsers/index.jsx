import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import api from "../../services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import Trash from '../../assets/trash.svg';

import {
  Container,
  ContainerUsers,
  Title,
  CardUsers,
  TrashIcons,
  AvatarUsers,
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate ()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    const updateUsers = users.filter (user => user.id !== id)
    setUsers (updateUsers)
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcons src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id) }/>
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>voltar</Button>
    </Container>
  );
}

export default ListUsers;
