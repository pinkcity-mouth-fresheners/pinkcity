import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";
// 2026-06-04: Removed `firebase/auth` imports — auth was never used on the static site, yet
// importing getAuth/GoogleAuthProvider pulled the entire firebase/auth chunk into the client
// bundle. Dropping it shrinks first-load JS with zero behavioral change. (perf audit)

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};


const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

let analytics: Analytics | undefined;

const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      return analytics;
    }
  }
  return null;
};

export { app, analytics, initAnalytics };
