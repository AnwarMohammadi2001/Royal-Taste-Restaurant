import { Button } from "@/components/ui/button"

const modes = ["Dine in", "Take Away", "Delivery"]

export function DiningMode() {
  return (
    <div className="flex gap-2 mb-4">
      {modes.map((mode, index) => (
        <Button key={index} variant={index === 0 ? "secondary" : "ghost"} className="rounded-full">
          {mode}
        </Button>
      ))}
    </div>
  )
}

