import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    fetch('/api/logout').then(() => {
      window.location.href = '/login'; // Redirect after logout
    });
  }, []);

  return <p>Logging out...</p>;
}
