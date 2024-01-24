import Link from "next/link";

export default function MealDetailsPage({ params }) {
  return(
    <main>
      <h1>{params.mealSlug}</h1>
      <Link href={"/meals"}>Back to meals</Link>
    </main>
  )
}