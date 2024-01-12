import Link from "next/link"

export const Header = () => {
  return (
    <header className="text-center pt-8 text-2xl">
      <Link href={"/"}>
        gabrielmzl.dev
      </Link>
    </header>
  )
}