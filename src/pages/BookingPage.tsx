import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Euro, Minus, Plus } from 'lucide-react';
import { events } from '../data/events';

export const BookingPage: React.FC = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  const total = event.price * quantity;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= event.availableSeats) {
      setQuantity(newQuantity);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/payment/${eventId}`, { state: { quantity, total } });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{event.artist}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={20} />
              <span>{event.date} à {event.time}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>{event.venue}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Euro size={20} />
              <span>{event.price}€ par place</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de places
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Minus size={20} />
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-2xl font-bold">{total}€</span>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Continuer vers le paiement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};