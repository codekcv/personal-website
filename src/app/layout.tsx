import Layout from "@/components/Layout";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
