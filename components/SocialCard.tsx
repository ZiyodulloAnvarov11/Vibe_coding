'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialCardProps {
  platform: string;
  icon: LucideIcon;
  handle: string;
  description: string;
  link: string;
  delay?: number;
}

export function SocialCard({ platform, icon: Icon, handle, description, link, delay = 0 }: SocialCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-start p-8 border border-transparent hover:border-swissSlateLight dark:hover:border-swissCharcoal transition-colors duration-300"
    >
      <div className="mb-6">
        <Icon className="w-8 h-8 text-swissBlack dark:text-swissWhitePure group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
      </div>
      <h3 className="text-xl font-medium mb-2 tracking-tight">{platform}</h3>
      <p className="text-sm text-swissBlack font-medium dark:text-swissWhitePure mb-4">
        {handle}
      </p>
      <p className="text-swissSlateDim font-light text-sm leading-relaxed">
        {description}
      </p>
    </motion.a>
  );
}
