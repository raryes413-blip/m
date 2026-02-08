import Navbar from '../../components/Navbar';
import PrescriptionForm from '../../components/PrescriptionForm';
import QRDisplay from '../../components/QRDisplay';

export default function NewPrescription() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold">New Prescription</h1>
        <PrescriptionForm />
        <QRDisplay payload="RX:demo:token" />
      </main>
    </div>
  );
}
