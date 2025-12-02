"use client"
import Link from "next/link";


export default function SidebarLink({ href, icon, label }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-(--neutral-color) transition-all cursor-pointer"
        >
            <span className={`${icon} size-5`} />
            <span className="text-base">{label}</span>
        </Link>
    );
}