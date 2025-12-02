"use client";

import Link from "next/link";
import { useState } from "react";
import SidebarLink from "./SidebarLink";
import DropdownMenu from "./DropdownMenu";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden p-3"
        onClick={() => setOpen(true)}
      >
        <span className="icon-[tabler--menu-2] size-6 text-(--accent-color)" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed sm:static inset-y-0 left-0 z-50
        w-64 sm:w-60 bg-(--primary-color) border-r border-(--neutral-color)
        flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-(--neutral-color)">
          <h1 className="text-xl font-semibold text-(--accent-color)">Dashboard</h1>

          {/* Close button for mobile */}
          <button className="sm:hidden" onClick={() => setOpen(false)}>
            <span className="icon-[tabler--x] size-6" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <SidebarLink href="/" icon="icon-[tabler--home]" label="Home" />
          <SidebarLink href="/dashboard/create-new-courese" icon="icon-[tabler--message]" label="Courses" />

          <SidebarLink href="/signin" icon="icon-[tabler--login]" label="Sign In" />
          <SidebarLink href="/signout" icon="icon-[tabler--logout-2]" label="Sign Out" />
        </nav>
      </aside>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}




