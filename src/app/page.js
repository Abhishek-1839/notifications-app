"use client";
import { subscribeUser } from "import/components/PushNotification";
import "./globals.css";

export default function Home() {
  function sendNotification() {
    if (Notification.permission === "granted") {
      new Notification("Hello!", { body: "This is a push notification." });
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hello!", { body: "This is a push notification." });
        }
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <button
      onClick={subscribeUser}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Subscribe to Notifications
    </button>
  </div>
  );
}
