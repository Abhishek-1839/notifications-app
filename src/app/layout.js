import ServiceWorkerRegister from "import/components/ServiceWorkerRegister";
import "./globals.css";
// "use client";
export const metadata = {
  title: "Next.js PWA",
  description: "A PWA-enabled Next.js app",
  manifest: "/manifest.json",
};


// import { useEffect } from "react";
// export default function RootLayout({ children }) {
//   useEffect(() => {
//     if ("serviceWorker" in navigator) {
//       navigator.serviceWorker.register("/sw.js").then((registration) => {
//         console.log("Service Worker registered:", registration);
//       }) .catch((error) => {
//         console.error("Service Worker registration failed:", error);
//       });
//     }
//   }, []);

//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
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