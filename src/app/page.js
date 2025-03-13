"use client";
import { subscribeUser } from "import/components/PushNotification";
import "./globals.css";
export default function Home() {
  async function sendNotification() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        alert("You are not subscribed. Please subscribe first.");
        return;
      }

      await fetch("/api/send-notification", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Notification sent! Check your device.");
    } catch (error) {
      console.error("Failed to send notification:", error);
      alert("Failed to send notification. Check console for details.");
    }
  }

  return (
    <div className="container">
      <h1>Push Notification Demo</h1>
      <button onClick={subscribeUser} className="subscribe-btn">
        Subscribe to Notifications
      </button>
      {/* <button onClick={sendNotification} className="notify-btn">
        Send Notification
      </button> */}
    </div>
  );
}