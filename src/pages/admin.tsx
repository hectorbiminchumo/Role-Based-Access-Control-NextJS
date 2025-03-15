import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminPage() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      console.log(response);
      
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        if (data.role !== 'admin') {
          router.push('/not-authorized'); // Redirect non-admin users
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {user ? <p>Welcome, {user.username}! You have admin access.</p> : <p>Loading...</p>}
    </div>
  );
}

// export default function AdminPage() {
//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <p>Welcome, Admin! You have full access.</p>
//     </div>
//   );
// }
