"use client";

import LetterGlitch from "@/components/LetterGlitch";
import GlitchText from "@/components/GlitchText";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background 3D/Glitch effects */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Foreground text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
        <GlitchText
          speed={0.3}
          enableShadows={true}
          enableOnHover={false}
          className="custom-class"
        >
          Launching Soon!!
        </GlitchText>

        {/* Subtext with type effect */}
          <TextType
            text={["Stay tuned for something AMAZING!!", ""]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-[clamp(2rem,2vw,2rem)] font-semibold text-center "
          />
      </div>
    </main>
  );
}
