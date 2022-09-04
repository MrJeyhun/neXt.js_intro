import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"

export default function NotePage() {
    const router = useRouter();
    const {params} = router.query;
    console.log(params)
    

    return (
        <div>
            <div>User: {params}</div>
            <div>
                <Link href="/notes">
                    <a>Notes</a>
                </Link>
            </div>
            
        </div>
  )
}
