'use client';

// composant pour l'affichage du header sur mobile
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNavBar({ onItemClick }) {
  const { t } = useTranslation('header');

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <AnimatePresence>
      <motion.ul
        className="w-full px-4 py-6 space-y-4 bg-primary-dark rounded-lg shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {[
          { href: '/', key: 'accueil' },
          { href: '/activites', key: 'activites' },
          { href: '/cameroun', key: 'cameroun' },
          { href: '/civ', key: 'civ' },
          { href: '/senegal', key: 'senegal' },
          { href: '/contact', key: 'contact' },
        ].map((item) => (
          <motion.li
            key={item.key}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={item.href}
              onClick={onItemClick}
              className="block px-6 py-3 text-lg font-medium text-white hover:bg-primary-light rounded-md transition-all duration-300"
            >
              {t(`header.${item.key}`)}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
