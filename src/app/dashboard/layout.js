"use client";

import Sidebar from "../components/Dashboard/Sidebar";



export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-(--neutral-color)">
            {/* Sidebar */}

            <Sidebar />


            {/* Page Content */}
            <div className="flex-1 p-6 bg-(--neutral-color)">
                {children}
            </div>
        </div>
    );
}
