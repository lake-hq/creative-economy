import Image from "next/image"

export default function Navbar () {
    return (
    <div className="Navbar">
        <Image className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority />
        <div className="flex flex-row">
            <button className="navButton">Home</button>
            <button className="navButton">About</button>
            <button className="navButton">Blog</button>
            <button className="navButton">Contact</button>
        </div>
        <button className="outline-2 outline-gray-300 py-2 px-4 rounded-sm">SUBSCRIBE</button>
    </div>
    )
}