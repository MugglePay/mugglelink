"use client";
// Import React and necessary hooks
import React, { useState, useEffect } from "react";
import Image from "next/image";

// LogoComponent.tsx
const AnimatedText: React.FC = () => {
  // State to manage the current logo
  const [currentLogo, setCurrentLogo] = useState("youtube"); // 'youtube', 'spotify', 'discord'

  // Use useEffect to cycle through logos
  useEffect(() => {
    const logos = ["youtube", "discord", "x", "telegram"];
    let currentLogoIndex = 0;

    const intervalId = setInterval(() => {
      currentLogoIndex = (currentLogoIndex + 1) % logos.length;
      setCurrentLogo(logos[currentLogoIndex]);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="transition-all duration-500 ease-in-out text-3xl">
      {currentLogo === "youtube" && (
        <div className={`flex justify-center items-center gap-4`}>
          <h2>Youtube</h2>
          <Image
            src="/youtube.png"
            width={200}
            height={200}
            alt="YouTube"
            className="w-20 h-20"
          />
        </div>
      )}
      {/* {currentLogo === "spotify" && (
        <div className="flex justify-center items-center gap-4">
          <h2>Spotify</h2>
          <Image
            src="/spotify.png"
            width={100}
            height={100}
            alt="Spotify"
            className="w-20 h-20"
          />
        </div>
      )} */}
      {currentLogo === "discord" && (
        <div className="flex justify-center items-center gap-4">
          <h2>Discord</h2>
          <Image
            src="/discord.png"
            width={100}
            height={100}
            alt="Discord"
            className="w-20 h-20"
          />
        </div>
      )}
       {currentLogo === "x" && (
        <div className="flex justify-center items-center gap-4">
          <h2>X</h2>
          <Image
            src="/x.png"
            width={50}
            height={50}
            alt="x"
            className="w-20 h-20"
          />
        </div>
      )}
       {currentLogo === "telegram" && (
        <div className="flex justify-center items-center gap-4">
          <h2>Telegram</h2>
          <Image
            src="/telegram.png"
            width={100}
            height={100}
            alt="telegram"
            className="w-20 h-20"
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedText;
