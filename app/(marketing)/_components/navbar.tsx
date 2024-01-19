"use client"
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const isScrolled = useScrollTop();
    const { isAuthenticated, isLoading } = useConvexAuth();
    const { theme, setTheme } = useTheme();
    if (isLoading) return <h1>Loading</h1>
    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex justify-between items-center w-full p-6", isScrolled && 'border-b shadow-sm')}>
            <h1 className="capitalize font-bold text-xl">Notion</h1>
            <div className=" flex space-x-4 items-center">
                {!isAuthenticated ? (
                    <SignInButton mode="modal">
                        <Button variant={"ghost"} size={"sm"}>Login</Button>
                    </SignInButton>
                ) : (
                    <>
                        {/* <Button variant={"ghost"} size={"sm"}>Enter notion</Button> */}
                        <UserButton afterSignOutUrl="/" />
                    </>)}
                {/* <Button>Get notion free</Button> */}
                <Button variant={"ghost"} onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }}> {theme === "light" ? <SunIcon /> : <MoonIcon />}</Button>
            </div>
        </div>
    )
};

export default Navbar;
