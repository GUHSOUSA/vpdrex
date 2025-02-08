"use client";
import { AuthModal } from "@/features/auth/components/auth-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
    }, []);
    return (
        <>
            <AuthModal />
        </>
    );
}