import "./MisComponentes.css";

function UserCard({ name, email, age, isOnline }) {
  const statusClass = isOnline ? "online" : "offline";
  return (
    <div className="user-card">
      <div className="user-header">
        <span className={statusClass}>●</span>
        <h2>{name}</h2>
      </div>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
    </div>
  );
}

export default UserCard;