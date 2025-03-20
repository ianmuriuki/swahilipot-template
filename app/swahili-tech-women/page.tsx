import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import STWExplanation from '@/components/stw/STWExplanation';
import MentorshipDonation from '@/components/stw/MentorshipDonation';
import PadDonationsCard from '@/components/stw/padDonationsCard';

export default function SwahiliTechWomenPage() {
  return (
    <>
    <Breadcrumb
        pageName="Swahili Tech Women"
        description="Empowering women in technology through education, mentorship, and community support. Join us in bridging the gender gap in tech."
      />
      <STWExplanation />
      <MentorshipDonation />
      <PadDonationsCard />
    </>
  );
}

