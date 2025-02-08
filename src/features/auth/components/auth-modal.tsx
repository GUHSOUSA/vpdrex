"use client";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "../store/use-auth-modal";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { GithubIcon } from "lucide-react";

export const AuthModal = () => {
    const [open, setOpen] = useAuthModal();

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleLogin = () => {
        // Implementar lógica de autenticação com GitHub
        console.log("Iniciando autenticação com GitHub...");
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="space-y-3 p-6">
                <DialogHeader>
                    <DialogTitle>Entrar com GitHub</DialogTitle>
                    <DialogDescription>
                        Acesse sua conta na VPDREX e gerencie seus deploys facilmente.
                    </DialogDescription>
                </DialogHeader>
                <Button
                    onClick={handleLogin}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <GithubIcon className="size-5 absolute top-2.5 left-2.5" />
                    Entrar com GitHub
                </Button>
                <DialogFooter className="text-sm text-muted-foreground">
                    <span>
                        Ao criar uma conta, você concorda com nossos {" "}
                        <a href="/termos-de-servico" className="text-primary underline">
                            Termos de Serviço
                        </a>{" "}
                        e {" "}
                        <a
                            href="/politica-de-privacidade"
                            className="text-primary underline"
                        >
                            Política de Privacidade
                        </a>
                        .
                    </span>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};