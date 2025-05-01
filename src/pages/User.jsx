import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Você está visualizando o usuário com ID: {id}</p>
    </div>
  );
};

export default User;
