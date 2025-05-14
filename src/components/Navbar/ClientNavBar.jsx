
'use client'

import { usePathname } from 'next/navigation';
import NavBarMain from "@/components/Navbar/NavbarMain";
import NavBarHome from "@/components/Navbar/NavBarHome";

export default function ClientNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/'; // Check if we're on the home page
  
  return isHomePage ? <NavBarHome /> : <NavBarMain />;
}