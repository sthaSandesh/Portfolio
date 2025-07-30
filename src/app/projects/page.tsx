'use client';

import { Navbar } from '@/components/Navbar';
import Project from '@/components/Project';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="px-5 lg:px-12">
        <h1 className="text-4xl text-red font-semibold text-center pt-8">Projects</h1>
      </div>
      <div>
        <Project />
      </div>
    </motion.div>
  );
}
