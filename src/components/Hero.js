// src/components/Hero.js
'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative bg-blue-600 text-white h-96 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl">{t('subtitle')}</p>
    </section>
  );
}
