function UserCard({ user, email, edad, estado }) {
  return (
    <div className="user-card">
      <h2>{user}</h2>
        <p>Email: {email}</p>
        <p>Edad: {edad}</p>
        <p>Estado: {estado}</p>
    </div>
  );
}

export default UserCard;