interface CartItemProps {
  title: string
  price: number
  quantity: number
  image: string
}

export function CartItem({ title, price, quantity, image }: CartItemProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <img src={image || "/placeholder.svg"} alt={title} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="text-sm font-medium mb-1">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{quantity}X</span>
        </div>
      </div>
    </div>
  )
}

