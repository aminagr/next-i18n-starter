import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  // Attendre le paramètre `params` avant de l'utiliser
  const { locale } = await params;  

  // Vérifier si la locale est valide
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Définir la locale pour la requête
  setRequestLocale(locale);

  // Charger les messages pour la locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
