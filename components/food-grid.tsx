import { FoodCard } from "./food-card"

const foodItems = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Tasty Vegetable Salad Healthy Diet",
    price: 17.99,
    discount: 20,
    type: "Veg",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Original Chess Meat Burger With Chips",
    price: 23.99,
    type: "Non Veg",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Tacos Salsa With Chickens Grilled",
    price: 14.99,
    type: "Non Veg",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Fresh Orange Juice With Basil Seed",
    price: 12.99,
    type: "Veg",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Meat Sushi Maki With Tuna, Ship And Other",
    price: 9.99,
    type: "Non Veg",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg",
    title: "Original Chess Burger With French Fries",
    price: 10.59,
    discount: 20,
    type: "Veg",
  },
]

export function FoodGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {foodItems.map((item, index) => (
        <FoodCard key={index} {...item} />
      ))}
    </div>
  )
}

