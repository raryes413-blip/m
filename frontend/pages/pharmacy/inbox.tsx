import Navbar from '../../components/Navbar';

export default function PharmacyInbox() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">Pharmacy Inbox</h1>
        <div className="bg-white rounded shadow p-4">
          <p>Incoming prescriptions will appear here.</p>
          <p className="text-xs text-slate-500">Darija: dir scan w tsen ssaraha.</p>
        </div>
      </main>
    </div>
  );
}
