import Footer from "@/features/marketing/components/footer";
import { NavBar } from "@/features/marketing/components/navbar";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
        <div className="flex flex-col items-center w-full">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};
export default MarketingLayout;