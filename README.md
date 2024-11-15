# Next.js & Next-Intl Multilingual Starter

Welcome to the **Next.js Multilingual Starter**, a boilerplate designed to help you quickly set up and build multilingual applications with **Next.js** and **Next-Intl**. 

## 🚀 Features

- **Next.js 15**: Leverage the power of the latest Next.js features and the App Router
- **Next-Intl**: A seamless internationalization (i18n) library for managing multiple languages and locales.
- **Simple Setup**: Get up and running with multilingual support in just a few steps.
- **Scalable Architecture**: Easily extend your app with additional languages, components and pages.

## 📦 Technologies

- **Next.js**: A React framework for building fast, dynamic web apps.
- **Next-Intl**: A powerful library to manage translations and localizations in Next.js.
- **Tailwind CSS** : This starter comes with Tailwind CSS preconfigured, allowing you to easily build modern, responsive user interfaces. Tailwind's utility-first approach makes it easy to style your components without writing custom CSS, resulting in faster development and a cleaner codebase.

## ⚙️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/aminagr/nextjs-i18n-starter.git
cd multilingual
``` 
2. **Install dependencies:**
```bash
npm install
``` 
3. **Run the app:**
```bash
npm run dev
``` 
## 🛠️ Customizing
### Add More Languages
To add a new language, follow these steps:
1. Update the `locales` array in the `routing.js` file. This file is where your application handles the supported locales (languages). Add the language code for your new language (e.g., es for Spanish, de for German) to the array.
2. Inside the messages/ folder create a new file named after the language code you added. For example, if you added Spanish (es), create a new file called es.json. For example :
```bash
{
  "hello": "Hola",
  "welcome": "Bienvenido"
}
``` 

### Add Pages 
To add a new page, you can follow the structure provided by the Next.js App Router. For example, to add an "About" page:

1. Create a new folder called `about` inside `src/app/[locale]/`.
2. Inside the `about` folder, create a `page.js` file for your new page content.

#### Add Components
To add a new component, create it inside the `components` folder:

1. Create a new file for your component inside the `src/components/` directory (e.g., `MyComponent.js`).
2. Use the component inside any page or layout by importing it.
#### Using the translations
Use the useTranslations hook to access the translations dynamically.
```bash
import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations();
  return <h1>{t('hello')}</h1>; 
};
``` 

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/a7d6399e-ed09-4747-8b98-6fdf1282337e)
![image](https://github.com/user-attachments/assets/24570aa7-ac43-43f4-8331-130f47638d16)




## 📣 Contributing
Feel free to fork this repo and open pull requests for any improvements, bug fixes, or new features. Your contributions are always welcome!

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details
