import "./MisComponentes.css";

export default function UserProfile({ user, showEmail, showPhone, layout = "horizontal" }) {
  const containerClass = `user-profile ${layout === "vertical" ? "vertical" : "horizontal"}`;
  const { name, email, phone } = user || {};

  return (
    <div className={containerClass}>
      <div className="user-info">
        {name && <h3>{name}</h3>}
        {showEmail && email && <p>Email: {email}</p>}
        {showPhone && phone && <p>Teléfono: {phone}</p>}
      </div>
    </div>
  );
}

