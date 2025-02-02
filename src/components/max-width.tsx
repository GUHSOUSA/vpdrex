import { cn } from "@/lib/utils";

interface MaxWidthProps {
    children: React.ReactNode;
    className?: string;
}
export const MaxWidth = ({
    children,
    className,
}: MaxWidthProps) => {
    return (
        <div
            className={cn(
                "size-full mx-auto max-w-6xl px-4 md:px-12",
                className
            )}
        >
            {children}
        </div>
    )
};