'use client';

import { itemVariant } from '@/utils/config';
import { motion } from 'framer-motion';

interface IProps {
  title: string;
  subtitle: string;
  footer?: string;
  children?: React.ReactNode;
}

export function Card(props: IProps) {
  return (
    <motion.div variants={itemVariant} className="bg-darkGray p-3 rounded-md w-full min-h-[200px] flex flex-col">
      <div className="flex-grow">
        <h1 className="text-red text-xl font-semibold">{props.title}</h1>
        <p className="text-slate-300 font-semibold text-lg mt-1">{props.subtitle}</p>
        {props.children && <div className="mt-3">{props.children}</div>}
      </div>
      {props.footer && (
        <p className="text-white text-sm opacity-90 mt-4">{props.footer}</p>
      )}
    </motion.div>
  );
}