const paquetesMock = [
  {
    tracking: "ABC123",
    descripcion: "Zapatos deportivos",
    estado: "EN_TRANSITO",
    pieCubico: 1.2,
  },
  {
    tracking: "DEF456",
    descripcion: "Laptop",
    estado: "DISPONIBLE",
    pieCubico: 0.8,
  },
];

export default function ListaPaquetesCliente() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Mis paquetes</h1>
      <table className="w-full border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Tracking</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Estado</th>
            <th className="p-2">ft³</th>
          </tr>
        </thead>
        <tbody>
          {paquetesMock.map((p) => (
            <tr key={p.tracking} className="text-center border-t">
              <td className="p-2">{p.tracking}</td>
              <td className="p-2">{p.descripcion}</td>
              <td className="p-2">{p.estado}</td>
              <td className="p-2">{p.pieCubico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
