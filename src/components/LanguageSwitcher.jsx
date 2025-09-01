import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
  let tries = 0;
  const maxTries = 20; // will try for ~10 seconds

  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      setIsReady(true);
      clearInterval(interval);
    }
    if (++tries > maxTries) clearInterval(interval);
  }, 500);

  return () => clearInterval(interval);
}, []);


  const handleTranslate = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex gap-3">
      <button 
        className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50" 
        onClick={() => handleTranslate("en")}
        disabled={!isReady}
      >
        English
      </button>
      <button 
        className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50" 
        onClick={() => handleTranslate("ar")}
        disabled={!isReady}
      >
        Arabic
      </button>
    </div>
  );
}

