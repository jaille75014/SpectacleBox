import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle size={64} className="text-green-500" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Réservation confirmée !</h1>
      <p className="text-gray-600 mb-8">
        Un email de confirmation a été envoyé à votre adresse email.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};