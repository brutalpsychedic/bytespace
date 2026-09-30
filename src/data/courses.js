import { images } from './images.js';

export const FEATURED = 'Featured';

export const categories = [
  FEATURED,
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

// Revealed by the "+ More" pill.
export const extraCategories = ['Writing', 'Languages', '3D Modelling', 'Fitness', 'Finance'];

// Shared defaults so each course only lists what makes it different.
const base = {
  author: 'purepearl studio',
  level: 'Beginner',
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  price: 25,
  learners: '26+',
};

export const courses = [
  {
    ...base,
    id: 'figma-basics',
    title: 'Learn Figma from Basic',
    rating: 4.5,
    image: images.courses.figma,
    categories: ['UI/UX Design', 'Graphic Design'],
  },
  {
    ...base,
    id: 'digital-asset',
    title: 'Build Digital Asset',
    rating: 4.5,
    image: images.courses.digitalAsset,
    categories: ['Digital Illustration', 'Graphic Design', 'Crafts'],
  },
  {
    ...base,
    id: 'big-data',
    title: 'The Power of Big Data',
    rating: 4.5,
    image: images.courses.bigData,
    categories: ['Data Science', 'Web Development'],
  },
  {
    ...base,
    id: 'productivity',
    title: 'Balancing Productivity and Wellbeing',
    rating: 4.5,
    image: images.courses.productivity,
    categories: ['Productivity'],
  },
  {
    ...base,
    id: 'money-management',
    title: 'Mastering Money Management',
    rating: 4.8,
    image: images.courses.money,
    categories: ['Freelance & Entrepreneurship'],
  },
  {
    ...base,
    id: 'startup',
    title: 'From Idea to Startup Success',
    rating: 4.6,
    image: images.courses.startup,
    categories: ['Freelance & Entrepreneurship', 'Marketing', 'Social Media'],
  },
];
