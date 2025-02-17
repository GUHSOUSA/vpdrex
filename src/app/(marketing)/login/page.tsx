import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import Wrapper from "@/global/wrapper"

export default function LoginPage() {
    return (
        <Wrapper>
            <div className="grid min-h-svh lg:grid-cols-2">
            <p className="text-center flex justify-center items-center">textsr</p>
            <div className="flex flex-col gap-4 py-6 md:py-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Acme Inc.
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            
        </div>
        </Wrapper>
    )
}
