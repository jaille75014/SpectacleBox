import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { EventCard } from '../components/EventCard';
import { CategoryFilter } from '../components/CategoryFilter';
import type { Event } from '../types';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category === selectedCategory)
    : events;

  const handleBooking = (eventId: string) => {
    navigate(`/booking/${eventId}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Découvrez nos spectacles
        </h2>
        <p className="text-gray-600">
          Réservez vos places pour les meilleurs événements culturels
        </p>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event: Event) => (
          <EventCard
            key={event.id}
            event={event}
            onBooking={handleBooking}
          />
        ))}
      </div>
    </main>
  );
};