import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import Header from "@/components/Header";
import SubscriptionProvider from "@/components/SubscriptionProvider";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Trangual",
  description: "Created by Momentum Web Design, LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />

                {children}

                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}