import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"

export default function NotePage() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <div>Note: {id}</div>
            <div>
                <button onClick={e => router.push("/")}>
                    Go home
                </button>
            </div>
        </div>
    )
}
