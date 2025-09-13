import React from 'react';
import DefenceHeader from './components/DefenceHeader';
import DefenceHero from './components/DefenceHero';
import DefenceMission from './components/DefenceMission';
import DefenceProjects from './components/DefenceProjects';
import DefenceServices from './components/DefenceServices';
import DefenceTeam from './components/DefenceTeam';
import DefenceGallery from './components/DefenceGallery';
import DefenceContact from './components/DefenceContact';
import DefenceFooter from './components/DefenceFooter';

const DefenceRealtors = () => {
  return (
    <div className="min-h-screen bg-white">
      <DefenceHeader />
      <DefenceHero />
      <DefenceMission />
      <DefenceProjects />
      <DefenceServices />
      <DefenceTeam />
      <DefenceGallery />
      <DefenceContact />
      <DefenceFooter />
    </div>
  );
};

export default DefenceRealtors;
