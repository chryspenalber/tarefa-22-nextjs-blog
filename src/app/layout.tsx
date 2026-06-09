import React from "react";

export const metadata = {
  title: "Blog LA 2028 - Chrys Penalber",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f5f5f5",
          margin: 0,
        }}
      >
        <header
          style={{
            marginBottom: "40px",
            borderBottom: "2px solid #ddd",
            paddingBottom: "16px",
          }}
        >
          <h1>Blog LA 2028 - por Chrys Penalber</h1>
          <p>
            Análises, atletas e bastidores dos Jogos Olímpicos de Los Angeles
            2028
          </p>
        </header>
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "32px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
