'use client';

import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { AvatarURL, Education, fullName, githubName, itemVariant, WorkExp } from '@/utils/config';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Resume() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-12 items-center">
          {/* Profile Info Section */}
          <div className="w-full lg:w-2/3">
            <motion.div variants={itemVariant} className="mb-8">
              <h1 className="text-red text-4xl font-bold mb-2">{fullName}</h1>
              <h2 className="text-red text-xl mb-6">Frontend Developer</h2>
              <div className="bg-darkGray/50 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                <p className="text-red text-lg leading-relaxed mb-4">
                  Hi, I am a student and a self-taught full stack developer from Nepal, active since August of 2023.
                </p>
                <p className="text-red text-lg leading-relaxed">
                  I love experimenting with my ideas all the time, which usually turns out as another open source
                  project of mine.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Avatar Section */}
          {/* <motion.div 
            variants={itemVariant} 
            className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
          >
            <div className="relative">
              <Image
                src={AvatarURL}
                alt="avatar"
                className="rounded-2xl border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300"
                height={300}
                width={300}
                draggable="false"
                priority
              />
              <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur-2xl -z-10"></div>
            </div>
          </motion.div> */}
        </div>

        {/* Experience & Education Section */}
        <div className="mt-16 space-y-12">
          <motion.section variants={itemVariant}>
            <h2 className="text-red text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-lg mr-3 flex items-center justify-center">
                💼
              </span>
              Work Experience
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {WorkExp.map((m, i) => (
                <Card 
                  subtitle={m.company} 
                  title={m.title} 
                  footer={m.years} 
                  key={i}
                >
                  <div className='text-white'>

                  {m.body}
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariant}>
            <h2 className="text-red text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-lg mr-3 flex items-center justify-center">
                🎓
              </span>
              Education
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Education.map((m, i) => (
                <Card 
                  subtitle={m.university} 
                  title={m.title} 
                  footer={m.years} 
                  key={i}
                />
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}