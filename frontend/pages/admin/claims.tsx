import Navbar from '../../components/Navbar';
import ClaimsTable from '../../components/ClaimsTable';

export default function ClaimsAdmin() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">CNSS Claims</h1>
        <ClaimsTable />
      </main>
    </div>
  );
}
