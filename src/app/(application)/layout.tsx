import { Header } from "@/components/Header"

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="px-16 py-4">
        {children}
      </main>
    </>
  )
}