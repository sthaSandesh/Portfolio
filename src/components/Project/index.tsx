'use client';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  const [unavailableRepoIds, setUnavailableRepoIds] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: 'NSTB Result',
      description: 'A platform to check and verify NSTB exam results online.',
      link: 'https://result.nstb.org.np/',
      github: null
    },
    {
      id: 2,
      title: 'Pema Homestay',
      description: 'A cozy and welcoming homestay service based in Nepal.',
      link: 'https://pemahomestay.com.np/',
      github: null
    },
    {
      id: 3,
      title: 'DolmaPOS',
      description: 'A powerful point-of-sale system designed for modern businesses.',
      link: 'https://www.dolmapos.com/',
      github: 'https://github.com/yourusername/dolmapos'
    },
    {
      id: 4,
      title: 'Desire Education',
      description: 'An education consultancy offering guidance and study abroad services.',
      link: 'https://www.desireedunepal.com/',
      github: null
    },
    {
      id: 5,
      title: 'Aakafuji Education',
      description: 'A Japanese language institute helping learners reach their goals.',
      link: 'https://aakafuji.edu.np/',
      github: 'https://github.com/yourusername/aakafuji'
    },
    {
      id: 6,
      title: 'Food App',
      description: 'A mobile application for food delivery and restaurant management.',
      link: 'https://digital-menu-plum.vercel.app/',
      github: 'https://github.com/sthaSandesh/qrdigital-menu'
    },
    {
      id: 7,
      title: 'NepFlex',
      description: 'A movie streaming application.',
      link: 'https://nepflex-chi.vercel.app/',
      github: 'https://github.com/sthaSandesh/Movie-Application'
    },
    {
        id: 8,
        title: 'Weather App',
        description: 'A weather forecasting application.',
        link: 'https://weather-kappa-topaz.vercel.app/',
        github: 'https://github.com/sthaSandesh/weather-app'
    }
  ];

  type ProjectType = {
    id: number;
    title: string;
    description: string;
    link: string;
    github: string | null;
  };

  const handleGithubClick = (project: ProjectType) => {
    if (project.github) {
      window.open(project.github, '_blank');
    } else {
      setUnavailableRepoIds((prev) => [...prev, project.id]);
    }
  };

  return (
    <main className="px-6 py-12  min-h-screen text-white">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 border border-red rounded-2xl p-6 shadow-lg backdrop-blur-md hover:scale-[1.03] hover:shadow-[0_0_20px_#a855f7aa] transition-transform duration-300 flex flex-col justify-between group"
            >
              <div>
                <h2 className="text-2xl font-semibold text-red mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-base text-gray-300 mb-6">{project.description}</p>
              </div>
              <div>
                {unavailableRepoIds.includes(project.id) && (
                  <span className="text-sm text-gray-400 italic text-center">GitHub repo not available</span>
                )}
              </div>
              <div className="flex gap-2 my-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-sm px-4 py-2 rounded-lg bg-red hover:bg-darkRed transition-colors duration-200 text-white font-medium"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => handleGithubClick(project)}
                  className="flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg border border-red text-red hover:bg-red hover:text-white transition-colors duration-200 font-medium"
                >
                  <FaGithub className="text-lg" />
                  GitHub Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
