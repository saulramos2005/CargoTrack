export default function ClienteDashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido, Cliente</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <a href="/cliente/paquetes" className="bg-white shadow p-4 rounded hover:bg-gray-100">
          📦 Ver mis paquetes
        </a>
        <a href="/cliente/facturas" className="bg-white shadow p-4 rounded hover:bg-gray-100">
          🧾 Mis facturas
        </a>
        <a href="/cliente/envios" className="bg-white shadow p-4 rounded hover:bg-gray-100">
          ✈️ Mis envíos
        </a>
      </div>
    </main>
  );
}
