import React from "react";
import Link from "next/link"

const Page = () => {
    return (
        <>
            <h2>Main page</h2>
            <div>
                <Link href="/notes">
                    <a>Notes</a>
                </Link>
            </div>

            <div>
                <Link href="/users">
                    <a>Users</a>
                </Link>
            </div>
            
        </>
    )
}

export default Page;