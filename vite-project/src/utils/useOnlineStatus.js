import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const online = window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    const offline = window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    return () => {
      window.removeEventListener(online, () =>
        console.log("Online event removed")
      );
      window.removeEventListener(offline, () =>
        console.log("Offline event removed ")
      );
    };
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
