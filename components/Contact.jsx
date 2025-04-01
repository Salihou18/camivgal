'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { nom: '' },
  });

  const sendMail = async (data) => {
    try {
      const templateParams = {
        nom: data.nom,
        email: data.email,
        objet: data.objet,
        message: data.message,
      };

      await emailjs.send(
        'service_r5xdpwo',
        'template_38y2ib5',
        templateParams,
        'CBEyuwpu_0GUrmeuT'
      );

      setConfirmationMessage('Votre message a été envoyé avec succès !');
      reset();

      setTimeout(() => setConfirmationMessage(''), 5000);
    } catch (error) {
      console.error("Échec de l'envoi de l'email:", error);
    }
  };

  return (
    <div className="flex justify-center mt-10 min-h-screen">
      <form
        onSubmit={handleSubmit(sendMail)}
        className="flex gap-4 flex-col min-w-96"
      >
        <label className="flex gap-2 flex-col">
          Nom:
          <input
            {...register('nom', { required: 'Champ obligatoire' })}
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.nom && (
            <span className="text-red-500 text-xs">{errors.nom.message}</span>
          )}
        </label>

        <label className="flex gap-2 flex-col">
          Email:
          <input
            {...register('email', {
              required: 'Champ obligatoire',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Adresse email invalide',
              },
            })}
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </label>

        <label className="flex gap-2 flex-col">
          Objet:
          <input
            {...register('objet', { required: 'Champ obligatoire' })}
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.objet && (
            <span className="text-red-500 text-xs">{errors.objet.message}</span>
          )}
        </label>

        <label className="flex gap-2 flex-col">
          Message:
          <textarea
            {...register('message', { required: 'Champ obligatoire' })}
            className="border-2 rounded-lg p-2"
            rows={5}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">
              {errors.message.message}
            </span>
          )}
        </label>

        {confirmationMessage && (
          <p className="text-green-600">{confirmationMessage}</p>
        )}

        {Object.keys(errors).length > 0 && (
          <p className="text-red-500 text-sm">
            Veuillez remplir tous les champs obligatoires.
          </p>
        )}

        <div className="flex justify-center gap-4 my-8">
          <input
            type="submit"
            value={isSubmitting ? 'Envoi...' : 'Envoyer'}
            className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
            disabled={isSubmitting}
          />
          <input
            type="button"
            value="Annuler"
            className="bg-gray-600 text-white rounded-lg p-2 cursor-pointer hover:bg-gray-700"
            onClick={() => reset()}
          />
        </div>
      </form>
    </div>
  );
}
