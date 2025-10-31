import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationClick = () => {
    setNotificationCount((prev) => prev + 1);
  };

  return (
    <header className="w-full pb-6 pt-6 px-4">
      <div className="flex w-full items-center justify-between">
        <div className="self-stretch flex items-center gap-4 font-normal leading-[1.2] my-auto">
          <div className="self-stretch my-auto">
            <h1 className="text-foreground text-2xl">Welcome, Peter</h1>
            <p className="text-[#716860] text-base">30 October 2025</p>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-3 my-auto">
          <ThemeToggle />
          <button
            className="bg-[#fff] dark:bg-[rgba(33,30,30,1)] self-stretch flex min-h-12 w-12 items-center gap-2 justify-center h-12 my-auto px-3 rounded-[46px] hover:bg-[rgba(33,30,30,0.8)] transition-colors"
            onClick={handleNotificationClick}
            aria-label={`Notifications ${notificationCount > 0 ? `(${notificationCount})` : ""}`}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f42ad3ff1bd0f0db1e478ebfa5a39473323cd7eb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Notification bell"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
