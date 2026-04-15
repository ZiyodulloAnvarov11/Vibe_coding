'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Send, Youtube } from 'lucide-react';
import { SocialCard } from '@/components/SocialCard';

export default function Home() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pb-12 pt-16 sm:pt-24 lg:pt-32">
      {/* Intro Section */}
      <section className="mb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-12 text-balance"
            >
              Who I Am.
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6"
          >
            <p className="text-xl sm:text-2xl text-swissSlateDim leading-relaxed font-normal mb-10 max-w-2xl">
              I am a digital artisan bridging the gap between rigorous engineering and pristine aesthetics. By leveraging strict grid systems and cutting-edge technologies, I construct experiences that are both profoundly beautiful and structurally invisible.
            </p>
            <a 
              href="#socials" 
              className="inline-flex items-center justify-center px-8 py-4 border border-swissBlack dark:border-swissWhitePure text-swissBlack dark:text-swissWhitePure hover:bg-swissBlack hover:text-swissWhitePure dark:hover:bg-swissWhitePure dark:hover:text-swissBlack transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Discover My Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Grid Section */}
      <section id="socials" className="border-t border-swissSlateLight dark:border-swissCharcoal pt-24 mb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest font-semibold text-swissSlateDim">
            Connections
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-swissSlateLight dark:border-swissCharcoal">
          <div className="col-span-1 border-b border-r border-swissSlateLight dark:border-swissCharcoal">
            <SocialCard 
              platform="Instagram"
              icon={Instagram}
              handle="@swiss.aesthetics"
              description="A visual diary exploring architectural minimalism, high-contrast photography, and daily design inspiration."
              link="#"
              delay={0.1}
            />
          </div>
          <div className="col-span-1 border-b border-r border-swissSlateLight dark:border-swissCharcoal">
            <SocialCard 
              platform="YouTube"
              icon={Youtube}
              handle="Studio Sessions"
              description="Long-form video essays diving deep into professional workflows, coding architecture, and design theory."
              link="#"
              delay={0.2}
            />
          </div>
          <div className="col-span-1 border-b border-r border-swissSlateLight dark:border-swissCharcoal">
            <SocialCard 
              platform="Telegram"
              icon={Send}
              handle="t.me/swiss_studio"
              description="A direct line to my inner circle. Get early access to thoughts, projects, and exclusive community discussions."
              link="#"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="pt-8 mt-16 border-t border-swissBlack dark:border-swissWhitePure flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm">
        <p className="font-medium text-swissBlack dark:text-swissWhitePure">
          &copy; {new Date().getFullYear()} Studio. All rights reserved.
        </p>
        <a 
          href="#" 
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 font-medium text-swissSlateDark hover:text-swissBlack dark:text-swissSlateDim dark:hover:text-swissWhitePure transition-colors"
        >
          Back to Top <ArrowUp className="w-4 h-4" />
        </a>
      </footer>
    </main>
  );
}
