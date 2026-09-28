import { MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { AudioToggle } from "./components/layout/AudioToggle.tsx";
import { Invitation } from "./components/invitation/Invitation.tsx";
import { Opening } from "./components/sections/Opening.tsx";
import { useInvitationAudio } from "./hooks/useInvitationAudio.ts";

export default function App() {
  const [entered, setEntered] = useState(false);
  const { playing, start, toggle } = useInvitationAudio();

  const openInvitation = useCallback(async () => {
    await start();
    setEntered(true);
  }, [start]);

  useEffect(() => {
    if (!entered) return;
    document.getElementById("invitation-title")?.focus({ preventScroll: true });
  }, [entered]);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#invitation-title">
        Skip to invitation
      </a>
      <AudioToggle playing={playing} onToggle={() => void toggle()} />
      {entered ? (
        <div className="invite-rise">
          <Invitation />
        </div>
      ) : (
        <Opening onEnter={() => void openInvitation()} />
      )}
    </MotionConfig>
  );
}
