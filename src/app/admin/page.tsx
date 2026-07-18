import { db } from "@/lib/db";
import { protocolos, kits, pedidos } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [totalProtocolos, totalKits, totalPedidos] = await Promise.all([
    db.$count(protocolos),
    db.$count(kits),
    db.$count(pedidos),
  ]);

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">Painel Luminá</h1>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Protocolos</p>
          <p className="text-2xl font-semibold">{totalProtocolos}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Kits</p>
          <p className="text-2xl font-semibold">{totalKits}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Pedidos</p>
          <p className="text-2xl font-semibold">{totalPedidos}</p>
        </div>
      </div>
    </div>
  );
}
