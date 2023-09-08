import Canvas from "@/components/Canvas"
import Home from "@/components/Home"

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
      <Canvas />
    </main>
  )
}
