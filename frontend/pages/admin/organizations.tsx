import Navbar from '../../components/Navbar';

export default function OrganizationsAdmin() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">Organization Registry</h1>
        <div className="bg-white rounded shadow p-4">
          <p>OMPIC-style verification queue (demo).</p>
        </div>
      </main>
    </div>
  );
}
