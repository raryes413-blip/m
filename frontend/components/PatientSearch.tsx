import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PatientSearch() {
  const [query, setQuery] = useState('');
  const { data } = useSWR(`/api/patients?query=${encodeURIComponent(query)}`, fetcher);

  return (
    <div className="space-y-2">
      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="Search patient (CIN, name)"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="bg-white rounded shadow p-3">
        {(data || []).map((patient: { id: string; firstName: string; lastName: string }) => (
          <div key={patient.id} className="py-1">
            {patient.firstName} {patient.lastName}
          </div>
        ))}
      </div>
    </div>
  );
}
