"use client";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const modalAuthAtom = atom(false);
export const useAuthModal = () => {
    useEffect(() => {
        console.log("Componente montado no cliente");
    }, []);
    
    return useAtom(modalAuthAtom);
};