import React from 'react';

export type Category = 'Science' | 'Philosophy' | 'Art' | 'Growth';

export interface Guest {
  name: string;
  title: string;
  description: string;
  category: Category;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}