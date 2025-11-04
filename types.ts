// Fix: Import React to resolve the "Cannot find namespace 'React'" error.
import React from 'react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  favoriteBook: string;
}

export interface ScheduleItem {
  id: number;
  time: string;
  activity: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

export interface FacilityImage {
  id: number;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}
