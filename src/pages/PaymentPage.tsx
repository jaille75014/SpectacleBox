import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Mail, User } from 'lucide-react';
import { events } from '../data/events';

export const PaymentPage: React.FC = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { quantity, total } = location.state || { quantity: 1, total: 0 };

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Paiement</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Récapitulatif</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">{event.title}</p>
            <p className="text-gray-600">{quantity} place(s) x {event.price}€</p>
            <p className="text-xl font-bold mt-2">Total: {total}€</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>Nom complet</span>
              </div>
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>Email</span>
              </div>
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="jean.dupont@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <CreditCard size={20} />
                <span>Numéro de carte</span>
              </div>
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="4242 4242 4242 4242"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date d'expiration
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="MM/AA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Payer {total}€
          </button>
        </form>
      </div>
    </div>
  );
};