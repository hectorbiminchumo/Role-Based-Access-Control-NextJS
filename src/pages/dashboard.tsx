import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      if (response.ok) setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Welcome, {user.username}! You are logged in as {user.role}.</p> : <p>Loading...</p>}
    </div>
  );
}
