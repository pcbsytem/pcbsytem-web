import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../../firebase/initFirebase"
import { NextResponse } from "next/server"
import { COLLECTION } from "@/constants"

const getExperienceData = async () => {
  try {
    const entriesData = await getDocs(collection(db, COLLECTION.EXPERIENCE))
      .then((querySnapshot) =>
        querySnapshot.docs.map((doc) =>
          ({ ...doc.data(), id: doc.id })
        )
      )

    return entriesData
  } catch (e) {
    return []
  }
}

export async function GET() {
  const data = await getExperienceData()
  return NextResponse.json({ data })
}