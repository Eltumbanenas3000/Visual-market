import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function SwitchBtn(){
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

  // Evita problemas de renderizado durante la hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}