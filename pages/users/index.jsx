import React from 'react'
import Link from "next/link"


export default function UsersPage() {
    const users = new Array(15).fill(1).map((e, i) => ({id: i, title: `User: ${i}`}))

    return (
        <div>
            <h2>All users</h2>
            <div>
                {users.map(user => (
                    <div>
                        <Link key={user.id} href="/users/[id]" as={`/users/${user.id}`}>
                            <a>
                                <strong>{user.title}</strong>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>     
                
        </div>
    )
}
