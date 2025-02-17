"use client";
import { user } from "@/@types/user";

import Icons from "@/global/icons";
import Container from "@/motion/container";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Menu from "./menu";
import { ModeToggle } from "@/global/toggle-menu";
import { useRouter } from "next/navigation";

interface NavBarProps {
    user?: user;
}

export const NavBar = ({
    user
}: NavBarProps) => {
    const router = useRouter();
    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-8 h-8" />
                            <span className="text-lg font-medium">
                                VpDrex
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Menu/>
                    </nav>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex items-center gap-4">
                            {user ? (
                                <Link href="/dashboard" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => router.push("/login")}
                                        size="sm"
                                        variant="outline"
                                    >
                                        Entrar
                                    </Button>
                                    <ModeToggle/>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </Container>

        </header>
    );
};