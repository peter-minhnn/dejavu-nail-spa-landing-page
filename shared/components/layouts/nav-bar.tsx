'use client';

import { cn } from '@/lib/utils';
import { navigation } from '@/shared/data/navbar-data';
import { Link, usePathname } from '@/shared/i18n/routing';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [topNum, setTopNum] = useState<number>(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
      setTopNum(lastScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn('sticky-header sticky top-0 w-full', {
        'show bg-transparent': showHeader,
        'z-[999] bg-white': showHeader && topNum > 100,
      })}
    >
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-4 lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <Image
              src="/images/svg/logo.svg"
              width={48}
              height={48}
              alt="logo"
            />
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 lg:hidden rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="navbar-language"
        >
          <ul className="mt-4 flex flex-col justify-end rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {navigation.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className={cn(
                    'hover:active-menu block rounded-sm bg-blue-700 px-3 py-2 md:bg-transparent md:p-0',
                    {
                      'active-menu': menu.href === pathname,
                      'text-black': showHeader && topNum > 100,
                      'text-white': showHeader && topNum < 100,
                    }
                  )}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
