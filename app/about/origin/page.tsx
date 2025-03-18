import React from 'react';
import Origin from '@/components/about/origin/Origin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Origin Story - SwahiliPot Hub",
  description: "Discover how SwahiliPot Hub began and the journey that has shaped our mission and vision.",
};

export default function OriginPage() {
  return <Origin />;
}

