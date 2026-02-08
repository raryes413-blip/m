import Navbar from '../../components/Navbar';
import PatientSearch from '../../components/PatientSearch';

export default function DoctorDashboard() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 space-y-6">
        <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
        <p className="text-sm text-slate-600">Bonjour / Salam, follow up your patients.</p>
        <PatientSearch />
      </main>
    </div>
  );
}
