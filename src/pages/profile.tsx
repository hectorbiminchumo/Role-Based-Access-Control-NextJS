import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      console.log('responseeee=>>>', response);
      
      const data = await response.json();
      if (response.ok) setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {user ? <p>Your username: {user.username}</p> : <p>Loading...</p>}
    </div>
  );
}
