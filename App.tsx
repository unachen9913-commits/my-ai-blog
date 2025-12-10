
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Award as AwardIcon, 
  User, 
  MapPin, 
  Mail, 
  Quote,
  Printer,
  ExternalLink
} from 'lucide-react';
import { clsx } from 'clsx';

import { PROFILE, EDUCATION, EXPERIENCE, PUBLICATIONS, AWARDS, RESEARCH_INTERESTS } from './constants';
import { ViewState, Publication, Award } from './types';
import { TabButton } from './components/TabButton';
import { TimelineItem } from './components/TimelineItem';

// --- Helpers ---
const groupByYear = <T extends { year?: string }>(items: T[]) => {
  const sorted = [...items].sort((a, b) => {
    const ya = parseInt(a.year || '0');
    const yb = parseInt(b.year || '0');
    return yb - ya;
  });
  
  const groups: Record<string, T[]> = {};
  sorted.forEach(item => {
    const y = item.year || 'Other';
    if (!groups[y]) groups[y] = [];
    groups[y].push(item);
  });

  // Sort years descending
  return Object.entries(groups).sort((a, b) => {
    if (a[0] === 'Other') return 1;
    if (b[0] === 'Other') return -1;
    return parseInt(b[0]) - parseInt(a[0]);
  });
};

// --- Sub-Components for Views ---

const HomeView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-16 max-w-4xl mx-auto"
    >
      {/* Bio Section with a drop cap feel */}
      <section className="relative">
        <Quote className="absolute -top-6 -left-6 w-8 h-8 text-stone-200 opacity-50" />
        <p className="text-stone-600 leading-loose text-lg font-light text-justify">
          {PROFILE.bio}
        </p>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-xl font-serif text-stone-800 mb-8 flex items-center gap-3 after:content-[''] after:h-[1px] after:flex-1 after:bg-stone-200">
          Interests & Expertise
        </h2>
        <div>
          <h3 className="text-xs font-serif text-stone-400 mb-5 tracking-widest uppercase">Research Focus</h3>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((item, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-[#fdf8f6] text-stone-600 text-sm rounded-sm border border-[#f2e8e5] hover:border-accent-500 hover:text-accent-600 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-1 gap-12">
        {/* Education Column */}
         <section>
          <h2 className="text-xl font-serif text-stone-800 mb-8 flex items-center gap-3 after:content-[''] after:h-[1px] after:flex-1 after:bg-stone-200">
            Education
          </h2>
          <div className="ml-2">
            {EDUCATION.map((edu, idx) => (
              <TimelineItem 
                key={idx}
                index={idx}
                title={edu.school}
                subtitle={edu.degree}
                date={edu.year}
                description={edu.description}
                isLast={idx === EDUCATION.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Experience Column */}
        <section>
          <h2 className="text-xl font-serif text-stone-800 mb-8 flex items-center gap-3 after:content-[''] after:h-[1px] after:flex-1 after:bg-stone-200">
            Experience
          </h2>
          <div className="ml-2">
            {EXPERIENCE.map((exp, idx) => (
              <TimelineItem 
                key={idx}
                index={idx}
                title={exp.role}
                subtitle={exp.company}
                date={exp.period}
                description={exp.description}
                isLast={idx === EXPERIENCE.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const PublicationsView: React.FC = () => {
  const journals = PUBLICATIONS.filter(p => p.category === 'Journal Paper');
  const conferences = PUBLICATIONS.filter(p => p.category === 'Conference Paper');

  const Section = ({ title, items, delayOffset }: { title: string, items: Publication[], delayOffset: number }) => {
    const grouped = groupByYear(items);

    return (
      <div className="mb-16">
        <h3 className="text-2xl font-serif text-stone-800 mb-12 text-center italic relative inline-block w-full">
          <span className="bg-[#fafaf9] px-4 relative z-10">{title}</span>
          <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-stone-200 -z-0"></span>
        </h3>
        
        <div className="space-y-12">
          {grouped.map(([year, groupItems], groupIdx) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (groupIdx * 0.1) + delayOffset, duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8"
            >
              {/* Year Label - Sticky on desktop */}
              <div className="md:w-24 flex-shrink-0">
                <span className="text-xl font-serif text-stone-300 font-bold sticky top-24 block">
                  {year}
                </span>
              </div>
              
              {/* Items for this year */}
              <div className="flex-1 space-y-8">
                {groupItems.map((pub, idx) => (
                  <div 
                    key={idx} 
                    className="group transition-all duration-500 border-b border-stone-100 last:border-0 pb-6"
                  >
                    <div className="flex flex-col">
                      <div className="text-stone-700 leading-relaxed font-light">
                        <span className="font-medium text-stone-800">{pub.authors}</span> ({pub.year}). 
                        <span className="font-serif text-lg block my-2 text-stone-900 group-hover:text-accent-600 transition-colors">
                          {pub.title}
                        </span> 
                        <span className="italic text-stone-500 block">{pub.journalOrConference}</span>
                      </div>
                      
                      {pub.tags && pub.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {pub.tags.map(tag => (
                            <span key={tag} className="text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Section title="Journal Papers" items={journals} delayOffset={0} />
      <Section title="Conference Papers" items={conferences} delayOffset={0.2} />
    </motion.div>
  );
};

const AwardsView: React.FC = () => {
  const groupedAwards = {
    'Academic Honors': AWARDS.filter(a => a.category === 'Academic Honors'),
    'Paper Awards': AWARDS.filter(a => a.category === 'Paper Awards'),
    'International Competitions': AWARDS.filter(a => a.category === 'International Competitions'),
    'Domestic Competitions': AWARDS.filter(a => a.category === 'Domestic Competitions'),
    'Certificates': AWARDS.filter(a => a.category === 'Certificates'),
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-16 max-w-4xl mx-auto"
    >
      {(Object.keys(groupedAwards) as Array<keyof typeof groupedAwards>).map((category, catIdx) => {
        const items = groupedAwards[category];
        if (items.length === 0) return null;

        const groupedItems = groupByYear(items);

        return (
          <div key={category}>
            <h3 className="text-xl font-serif text-stone-800 mb-8 pl-4 border-l-2 border-accent-500">
              {category}
            </h3>
            
            <div className="space-y-8">
              {groupedItems.map(([year, groupItems], groupIdx) => (
                 <motion.div
                    key={year}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (catIdx * 0.1) + (groupIdx * 0.05) }}
                    className="flex flex-col md:flex-row gap-6"
                  >
                     {/* Year Label */}
                    <div className="md:w-20 flex-shrink-0">
                      <span className="text-sm font-serif text-stone-400 tracking-widest border-b border-stone-200 pb-1 inline-block md:block md:border-b-0 md:border-r md:pr-4 md:text-right">
                        {year}
                      </span>
                    </div>

                    <div className="flex-1 grid gap-6">
                      {groupItems.map((award, idx) => (
                        <div 
                          key={idx}
                          className="flex flex-col border-b border-stone-50 pb-4 last:border-0 last:pb-0"
                        >
                          <h4 className="text-md font-medium text-stone-800 mb-1 font-serif leading-snug">
                            {award.title}
                          </h4>
                          {award.organization && (
                            <span className="text-stone-500 text-sm italic mb-1">{award.organization}</span>
                          )}
                          {award.description && (
                            <p className="text-stone-400 text-xs leading-relaxed font-light">
                              {award.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                 </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-700 font-sans selection:bg-stone-200 selection:text-stone-900 transition-colors duration-700 flex flex-col">
      
      {/* Minimalist Header */}
      <header className="pt-20 pb-8 px-6 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center mb-12">
            
            {/* Info - Centered */}
            <div className="flex flex-col items-center text-center">
              {/* Name & Title */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col mb-3"
              >
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-stone-800 tracking-wide">
                  {PROFILE.nameEn}
                </h1>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-stone-600 mt-1">
                  {PROFILE.nameCh}
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-stone-500 font-light tracking-widest text-sm uppercase mb-8 max-w-md"
              >
                {PROFILE.title}
              </motion.p>
              
              {/* Contact Info - Minimal text links */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-stone-400 font-light"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {PROFILE.location}
                </span>
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1.5 hover:text-stone-600 transition-colors border-b border-transparent hover:border-stone-300">
                  <Mail className="w-3 h-3" /> {PROFILE.email}
                </a>
              </motion.div>
            </div>

          </div>

          {/* Navigation - Clean Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 md:gap-16 border-t border-stone-200 pt-8 w-full max-w-md mx-auto print:hidden"
          >
             <TabButton 
              isActive={view === ViewState.HOME} 
              onClick={() => setView(ViewState.HOME)} 
              icon={<User className="w-4 h-4" />}
              label="Profile"
            />
            <TabButton 
              isActive={view === ViewState.PUBLICATIONS} 
              onClick={() => setView(ViewState.PUBLICATIONS)} 
              icon={<BookOpen className="w-4 h-4" />}
              label="Publications"
            />
            <TabButton 
              isActive={view === ViewState.AWARDS} 
              onClick={() => setView(ViewState.AWARDS)} 
              icon={<AwardIcon className="w-4 h-4" />}
              label="Awards"
            />
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-12 min-h-[600px] flex-grow w-full">
        <AnimatePresence mode="wait">
          {view === ViewState.HOME && (
            <motion.div key="home" className="w-full">
              <HomeView />
            </motion.div>
          )}
          {view === ViewState.PUBLICATIONS && (
            <motion.div key="pubs" className="w-full">
              <div className="text-center mb-16">
                <span className="text-xs font-serif italic text-stone-400 block mb-2">Curated Works</span>
                <h2 className="text-3xl font-serif text-stone-800 tracking-tight">Academic Publications</h2>
              </div>
              <PublicationsView />
            </motion.div>
          )}
          {view === ViewState.AWARDS && (
            <motion.div key="awards" className="w-full">
               <div className="text-center mb-16">
                <span className="text-xs font-serif italic text-stone-400 block mb-2">Milestones</span>
                <h2 className="text-3xl font-serif text-stone-800 tracking-tight">Honors & Awards</h2>
              </div>
              <AwardsView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Print / Save Button */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-accent-600 transition-all print:hidden z-50 flex items-center gap-2 group"
        title="Print / Save as PDF"
      >
        <span className="w-0 overflow-hidden group-hover:w-auto group-hover:px-1 transition-all duration-300 text-xs whitespace-nowrap">Save PDF</span>
        <Printer className="w-5 h-5" />
      </button>

      {/* Footer - Minimal */}
      <footer className="py-12 mt-12 border-t border-stone-200 bg-white print:hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <div className="mb-6">
             <p className="text-2xl font-serif text-stone-800">{PROFILE.nameEn}</p>
             <p className="text-xl font-serif text-stone-600 mt-1">{PROFILE.nameCh}</p>
           </div>
           <p className="text-stone-400 text-sm font-light">
             © {new Date().getFullYear()} All rights reserved.
           </p>
           {(PROFILE.googleScholar || PROFILE.researchGate) && (
             <div className="mt-6 flex justify-center gap-6 text-xs tracking-widest text-stone-400 uppercase">
               {PROFILE.googleScholar && (
                 <a href={PROFILE.googleScholar} target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 flex items-center gap-1 transition-colors">
                   Google Scholar <ExternalLink className="w-3 h-3 opacity-50" />
                 </a>
               )}
               {PROFILE.researchGate && (
                 <a href={PROFILE.researchGate} target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 flex items-center gap-1 transition-colors">
                   ResearchGate <ExternalLink className="w-3 h-3 opacity-50" />
                 </a>
               )}
             </div>
           )}
        </div>
      </footer>
    </div>
  );
}
