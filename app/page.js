import Link from "next/link";

export default function Home() {
  return(
    <main>
      <h1>Food app</h1>
      <Link href={"/meals"}>Meals</Link>
      <Link href={"/community"}>Community</Link>
    </main>
  )
}
