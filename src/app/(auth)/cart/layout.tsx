import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Cart",
    description: "Generated by create next app",
};

export default function CartLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>



            {children}

        </div>
    );
}