const demoClaims = [
  { id: 'CL-001', status: 'SUBMITTED', region: 'MA-01' },
  { id: 'CL-002', status: 'APPROVED', region: 'MA-06' },
];

export default function ClaimsTable() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-3">CNSS Claims</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left">
            <th>ID</th>
            <th>Status</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {demoClaims.map((claim) => (
            <tr key={claim.id} className="border-t">
              <td className="py-2">{claim.id}</td>
              <td>{claim.status}</td>
              <td>{claim.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
