import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Images } from "@/lib/utils/contants";
import { ModalsProvider } from "@mantine/modals";

export const metadata = {
  title: "MyPosts",
  description: "The self journal posting application.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Images.faviconColor} sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: "blue",
            primaryShade: 5,

            colors: {
              blue: ["#a5c8f8", "#93bdf7", "#81b2f5", "#6fa7f4", "#5d9cf2", "#4b91f1", "#4483d9", "#3c74c1", "#3566a9", "#2d5791"],
            },

            headings: {
              fontFamily: "Roboto, sans-serif",
            },
          }}
        >
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
