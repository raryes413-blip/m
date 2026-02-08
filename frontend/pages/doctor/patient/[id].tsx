import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function PatientProfile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">Patient Profile</h1>
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm">Patient ID: {id}</p>
          <p className="text-sm">Medical history summary will appear here.</p>
        </div>
      </main>
    </div>
  );
}
