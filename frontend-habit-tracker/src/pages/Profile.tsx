import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user?.picture} alt="Profile" />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};
