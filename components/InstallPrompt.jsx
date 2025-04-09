'use client';

import { HiOutlineDownload } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const getInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', getInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', getInstallPrompt);
    };
  }, []);

  const handleClose = () => setInstallPrompt(null);

  const handleInstall = async () => {
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  if (!installPrompt) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 text-gray-800 px-3 py-0.5 shadow-sm flex items-center justify-between text-xs animate-fade-in-down border-b border-gray-300">
      <div className="flex items-center gap-2">
        <HiOutlineDownload size={16} className="text-blue-600" />
        <span className="font-medium"> Installer l'application Camivgal </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleInstall}
          className="bg-blue-600 text-white font-medium px-2.5 py-0.5 rounded hover:bg-blue-700 transition text-xs"
        >
          Installer
        </button>
        <button
          onClick={handleClose}
          className="text-gray-400 text-sm hover:text-red-400 transition leading-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
