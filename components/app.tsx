"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

import WalletConnector from "./wallet-connector";

export default function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [farcasterUserContext, setFarcasterUserContext] = useState<any>();

  useEffect(() => {
    const load = async () => {
        try {
            await sdk.actions.ready();
            setFarcasterUserContext(await sdk.context);

            // Ensure the "Add to Warpcast" panel appears
            sdk.actions.addFrame();
        } catch (error) {
            console.error("Error initializing Farcaster Frame:", error);
        }
    };

    if (sdk && !isSDKLoaded) {
        setIsSDKLoaded(true);
        load();
    }
}, [isSDKLoaded]);

return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
            src="https://carcade-unity.vercel.app/"
            width="720"
            height="1250"
            style={{ width: "100%", height: "100%", border: "none" }}
            allowFullScreen
        ></iframe>
    </div>
);
}
