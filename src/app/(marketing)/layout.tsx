import { NavBar } from "@/app/(marketing)/components/navbar";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
        <div className="flex flex-col items-center w-full">
            <NavBar />
            {children}
        </div>
    );
};
export default MarketingLayout;