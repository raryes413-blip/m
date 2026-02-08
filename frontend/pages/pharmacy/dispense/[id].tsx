import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function DispensePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">Dispense Prescription</h1>
        <div className="bg-white rounded shadow p-4">
          <p>Prescription ID: {id}</p>
          <button className="mt-3 bg-emerald-600 text-white px-4 py-2 rounded">Confirm Dispense</button>
        </div>
      </main>
    </div>
  );
}
