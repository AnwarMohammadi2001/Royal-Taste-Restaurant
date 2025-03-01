import { SidebarNav } from "../components/sidebar-nav"
import { Header } from "../components/header"
import { CategoryFilter } from "../components/category-filter"
import { FoodGrid } from "../components/food-grid"
import { Cart } from "../components/cart"
import { Footer } from "../components/footer"

export default function POSPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto p-4">
            <CategoryFilter />
            <FoodGrid />
          </main>
          <Cart />
        </div>
        <Footer />
      </div>
    </div>
  )
}

