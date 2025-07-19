'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Github, Star } from 'lucide-react';

// MVPBlocks inspired Gradient Hero Component
export default function GradientHero() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-slate-950 to-slate-950"></div>
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex justify-center"
          >
            <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-2 rounded-full bg-purple-500 px-2 py-0.5 text-xs font-semibold text-white">
                New
              </span>
              <span className="text-slate-400">
                Powered by Marathon MCP Servers
              </span>
              <ChevronRight className="ml-1 h-4 w-4 text-slate-400" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance bg-gradient-to-tl from-purple-500/10 via-white/85 to-white/50 bg-clip-text text-center text-4xl tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            UI Components Showcase
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-400"
          >
            Beautiful UI components from MVPBlocks, OriginUI, and Kibo libraries.
            Built with React, Tailwind CSS, and Framer Motion for stunning web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group relative overflow-hidden rounded-full bg-purple-600 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-purple-600/30">
              <span className="relative z-10 flex items-center">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </button>

            <button className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-white backdrop-blur-sm transition-colors hover:bg-slate-800/50">
              <Github className="h-4 w-4" />
              View on GitHub
            </button>
          </motion.div>

          {/* Feature Cards Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* MVPBlocks Card */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">M</span>
                    </div>
                    <h3 className="font-semibold text-white">MVPBlocks</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Beautiful, copyable blocks for rapid MVP development
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-slate-500">554 stars</span>
                  </div>
                </div>
              </div>

              {/* OriginUI Card */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">O</span>
                    </div>
                    <h3 className="font-semibold text-white">OriginUI</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Modern components with advanced hooks and functionality
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-slate-500">Active development</span>
                  </div>
                </div>
              </div>

              {/* Kibo Card */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-bold">K</span>
                    </div>
                    <h3 className="font-semibold text-white">Kibo UI</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Accessible components built on shadcn/ui primitives
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    <span className="text-xs text-slate-500">NPM package</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}