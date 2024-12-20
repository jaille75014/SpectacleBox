import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'François Alu et les danseurs de l Opéra national de Paris',
    artist: 'François Alu',
    date: '2025-01-15',
    time: '20:00',
    venue: 'Opéra National de Paris',
    price: 35,
    imageUrl: '../assets/francoisalu.jpeg',
    availableSeats: 120,
    category: 'spectacle'
  },
  {
    id: '2',
    title: 'Roméo et Juliette',
    artist: 'Compagnie des Arts',
    date: '2024-04-20',
    time: '19:30',
    venue: 'Théâtre de la Ville',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf',
    availableSeats: 250,
    category: 'theatre'
  },
  {
    id: '3',
    title: 'Festival Électro',
    artist: 'Electronic Minds',
    date: '2024-05-01',
    time: '22:00',
    venue: 'Le Zénith',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    availableSeats: 800,
    category: 'festival'
  }
];