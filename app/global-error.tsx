"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: unknown }) {
  return (
    <html>
      <body>
        <div className="not-found-container">
          <h1>Ocurrió un error</h1>
          <p>Lo sentimos mucho, pronto lo solucionaremos.</p>
          <Link
            href="/"
            className="px-5 py-3 bg-[#E8038D] rounded-md text-white my-10"
          >
            Ir al inicio
          </Link>
          <style>{`
            .not-found-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              padding: 0 20px;
              text-align: center;
            }

            h1 {
              font-size: 36px;
              margin-bottom: 10px;
            }

            p {
              font-size: 18px;
              color: #fff;
            }

            .home-button:hover {
              background-color: #E3015D;
            }
          `}</style>
        </div>
      </body>
    </html>
  );
}
