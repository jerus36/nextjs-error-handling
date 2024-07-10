import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderAppBar from "./components/Header";
import Stack from "@mui/material/Stack";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Error Handling",
  description: "Show how errors bubble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Stack>
          <HeaderAppBar />
          <div className={inter.className}>{children}</div>
        </Stack>
      </body>
    </html>
  );
}
