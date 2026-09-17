import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/main.css";
import "@/public/assets/css/gastonsin.css";
import { CurrencyProvider } from "@/util/currency";

const urbanist = Urbanist({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--urbanist",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://gastonsincardealership.com"),
    title: {
        default: "Gastonsin — Car Dealership & Rentals in Ghana",
        template: "%s | Gastonsin",
    },
    description:
        "Gastonsin Car Dealership & Rentals imports vehicles from China, the USA and Dubai directly to Ghana — ready stock at our Esiama warehouse, port clearing, and a rental fleet nationwide.",
    applicationName: "Gastonsin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${urbanist.variable}`}>
                <CurrencyProvider>{children}</CurrencyProvider>
            </body>
        </html>
    );
}
