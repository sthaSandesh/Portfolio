import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link href="/" className="font-semibold text-xl">
 <img src="/logo.png" alt="logo" width="141" height="30" />
    </Link>
  );
}
