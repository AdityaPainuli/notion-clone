"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import Navigation from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useConvexAuth();
    if (isLoading) {
        return (
            <div className="h-full  flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }
    if (!isAuthenticated) router.push('/')
    return (
        <div className="h-full flex dark:bg-[#1F1F1F] ">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    )
}


export default MainLayout;
