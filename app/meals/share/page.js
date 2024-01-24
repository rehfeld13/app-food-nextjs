import Link from "next/link";

export default function SharePage(){
  return(
    <main>
      <h1>Share Meal</h1>
      <Link href={"/meals"}>Back to Meals</Link>
    </main>
  )
}