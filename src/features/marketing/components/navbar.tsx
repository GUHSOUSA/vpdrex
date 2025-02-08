"use client";
import { user } from "@/@types/user";
import Menu from "@/components/menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { useAuthModal } from "@/features/auth/store/use-auth-modal";
import Icons from "@/global/icons";
import Container from "@/motion/container";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

interface NavBarProps {
    user?: user;
}

export const NavBar = ({
    user
}: NavBarProps) => {
    const [_open, setOpen] = useAuthModal();
    const [isOpen, setIsOpen] = useState<boolean>(false);


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
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
                        <Menu />

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
                                        onClick={() => setOpen(true)}
                                        size="sm"
                                        variant="outline"
                                        className="rounded-sm h-8"
                                    >
                                        Entrar
                                    </Button>
                                    <Button
                                        onClick={() => setOpen(true)}
                                        size="sm"
                                        variant="outline"
                                        className="rounded-sm h-8 bg-[#09142a] hidden md:flex"
                                    >
                                        Faça parte
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={() => setIsOpen((prev) => !prev)}
                                        className="lg:hidden p-2 w-8 h-8"
                                    >
                                        {isOpen ? <XIcon className="w-4 h-4 duration-300" /> : <MenuIcon className="w-3.5 h-3.5 duration-300" />}
                                    </Button></>
                            )}
                        </div>
                        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>

            </Container>

        </header>
    );
};