import { useState } from 'react';

export default function PrescriptionForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('Prescription created (demo).');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-white rounded shadow p-4">
      <div>
        <label className="text-sm font-medium">Medication</label>
        <input className="border px-3 py-2 rounded w-full" placeholder="Paracetamol" />
      </div>
      <div>
        <label className="text-sm font-medium">Dose</label>
        <input className="border px-3 py-2 rounded w-full" placeholder="500mg" />
      </div>
      <div>
        <label className="text-sm font-medium">Duration (days)</label>
        <input className="border px-3 py-2 rounded w-full" placeholder="5" />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Create Prescription
      </button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}
