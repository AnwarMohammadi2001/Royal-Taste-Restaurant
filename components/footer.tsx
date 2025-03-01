export function Footer() {
  const orders = [
    { table: "T1", items: 6, kitchen: "Kitchen", status: "Process" },
    { table: "T2", items: 4, kitchen: "Kitchen" },
    { table: "T3", items: 3, kitchen: "Kitchen" },
  ]

  return (
    <div className="bg-white border-t p-4 flex gap-4">
      {orders.map((order, index) => (
        <div key={index} className="flex items-center gap-3 bg-orange-50 rounded-lg p-3 flex-1">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium">
            {order.table}
          </div>
          <div>
            <div className="text-sm font-medium">
              {order.items} Items → {order.kitchen}
            </div>
            {order.status && <div className="text-xs text-orange-600">{order.status}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

