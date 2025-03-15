import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/admin">Admin</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}
