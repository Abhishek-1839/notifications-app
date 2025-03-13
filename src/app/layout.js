import ServiceWorkerRegister from "import/components/ServiceWorkerRegister";
import "./globals.css";
// "use client";
export const metadata = {
  title: "Next.js PWA",
  description: "A PWA-enabled Next.js app",
  manifest: "/manifest.json",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister /> {/* Register service worker */}
        {children}
      </body>
    </html>
  );
}