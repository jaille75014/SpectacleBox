import React from 'react';
import { Calendar, MapPin, Euro } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onBooking: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onBooking }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.artist}</p>
        
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Calendar size={16} />
          <span>{event.date} à {event.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <MapPin size={16} />
          <span>{event.venue}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Euro size={16} />
          <span>{event.price}€</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {event.availableSeats} places disponibles
          </span>
          <button
            onClick={() => onBooking(event.id)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};