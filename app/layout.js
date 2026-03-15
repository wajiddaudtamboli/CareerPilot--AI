import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ClerkProvider } from '@clerk/nextjs';
import Script from "next/script";

const logoUrl =
  "https://res.cloudinary.com/duhhsnbwh/image/upload/v1773567036/Logo_kowvbb.png";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "CareerPilot AI - Your Career Companion",
  description: "AI-powered career guidance and job preparation platform",
  icons: {
    icon: [
      { url: logoUrl, type: 'image/png' },
    ],
    shortcut: [logoUrl],
    apple: logoUrl,
  },
  openGraph: {
    title: 'CareerPilot AI - Your Career Companion',
    description: 'AI-powered career guidance and job preparation platform',
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: 'CareerPilot AI',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'CareerPilot AI - Your Career Companion',
    description: 'AI-powered career guidance and job preparation platform',
    images: [logoUrl],
  },
};

export default function RootLayout({ children }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isTestPublishableKey =
    typeof publishableKey === 'string' && publishableKey.startsWith('pk_test_');
  const isProduction = process.env.NODE_ENV === 'production';
  const clerkEnabled = Boolean(publishableKey) && !(isProduction && isTestPublishableKey);

  const app = (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
            {/* Elfsight AI Chatbot | CareerPilot AI */}
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div
              className="elfsight-app-12d484f6-d8fa-4f27-be1b-e1086ef47133"
              data-elfsight-app-lazy
            ></div>
          </div>
        </Providers>
      </body>
    </html>
  );

  if (!clerkEnabled) {
    return app;
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#3b82f6',
          colorBackground: '#ffffff',
          colorText: '#1f2937',
        },
        elements: {
          card: 'shadow-xl rounded-xl',
          headerTitle: 'text-2xl font-bold',
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
        },
      }}
    >
      {app}
    </ClerkProvider>
  );
}
