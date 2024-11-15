'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('HomePage');
  

  const [selectedLocale, setSelectedLocale] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem('locale') || locale;
    }
    return locale;
  });

  useEffect(() => {
    setSelectedLocale(locale); 
  }, [locale]);

  const handleLanguageChange = (event) => {
    const newLocale = event.target.value;
    setSelectedLocale(newLocale); 
    localStorage.setItem('locale', newLocale); 
    router.push(`/${newLocale}${pathname}`); 
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-semibold">{t('website')}</Link>

        <select 
          onChange={handleLanguageChange} 
          value={selectedLocale} 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
