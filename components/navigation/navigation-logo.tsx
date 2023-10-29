import React from "react";
import LogoAvatar from "../logo-avatar";

const NavigationLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-2 mt-4">
      {" "}
        <LogoAvatar src="logo.png" />
      <p className="text-md uppercase font-bold text-zinc-600 dark:text-zinc-400">
        ClientRouteXpert
      </p>
    </div>
  );
};

export default NavigationLogo;
