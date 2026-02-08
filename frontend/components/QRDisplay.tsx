export default function QRDisplay({ payload }: { payload: string }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <p className="text-sm">QR Payload (demo)</p>
      <code className="break-all text-xs">{payload}</code>
      <p className="text-xs mt-2">Darija: Skan l-QR f saydliya.</p>
    </div>
  );
}
