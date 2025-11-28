'use client';

import { layoutConfig } from '@/config/layout.config';
import { siteConfig } from '@/config/site.config';
import { navData } from '@/config/site.config';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const Logo = () => {
  return (
    <Image
      src={'/Logo.png'}
      alt={siteConfig.title}
      width={50}
      height={50}
      priority
    />
  );
};

export default function Header() {
  const pathname = usePathname();

  const getNavItems = () => {
    return (
      <>
        {navData.map((item) => {
          const isActive = pathname === item.href;
          return (
            <>
              <NavbarItem key={item.href}>
                <Link
                  color="foreground"
                  href={item.href}
                  className={`${
                    isActive ? 'font-bold text-blue-500' : 'text-foreground'
                  } hover:text-blue-300 hover:border hover:border-blue300 hover:rounded-md transition-colors transition-border duration-200  ease-in-out px-3 py-2 block`}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            </>
          );
        })}
      </>
    );
  };

  return (
    <Navbar className={`h-[${layoutConfig.headerHeight}px]`}>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Логин</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
