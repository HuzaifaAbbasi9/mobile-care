import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata = {
  title: "Mobile Care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
