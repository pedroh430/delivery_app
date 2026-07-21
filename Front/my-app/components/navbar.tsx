"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = [
    {href:"/", label: "shop"},
];

export default function Navbar(){
    const pathname = usePathname();

    return(
        <nav className="flex items-center justify-betewen px-6 py4 border-b">
            <Link href="/" className="font-bold text-lg color: red">
              ols
            </Link>


            <ul className="flex gap-6">
                {Links.map((link) =>(
                    <li key={link.href}>
                        <Link
                           href={link.href}
                           className={pathname === link.href ? "font-semibold": "text-gray-600"}>
                            {link.label}
                        
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    )


}