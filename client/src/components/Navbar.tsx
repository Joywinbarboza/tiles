"use client"

import Logout from "@/components/Logout"
import { useUser } from "@/provider/UserProvider"
import Link from "next/link"

export default function Navbar() {
  const { user } = useUser()
  return (
    <nav>
      <div className="absolute w-full flex justify-between items-center px-4 py-4">
        <p>Tiles</p>
        <div>
          {user ? (
            // TODO: Make it button reusable component and extract out the login
            <div className="flex gap-2 items-center">
              <p>{user.name}</p>
              <Logout />
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-500 rounded-md text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
