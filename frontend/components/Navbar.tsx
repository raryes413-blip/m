import Link from 'next/link';

const navItems = [
  { href: '/doctor/dashboard', label: 'Doctor' },
  { href: '/pharmacy/inbox', label: 'Pharmacy' },
  { href: '/admin/organizations', label: 'Admin' },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex gap-4">
      <span className="font-semibold">E-Health Morocco</span>
      {navItems.map((item) => (
        <Link key={item.href} className="text-blue-600" href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
