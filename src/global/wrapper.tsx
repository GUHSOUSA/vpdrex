import React from 'react'
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div className={cn(
            "h-full mx-auto w-full md:max-w-screen-xl",
            className
        )}>
            {children}
        </div>
    )
};

export default Wrapper
