import React from "react";
import Link from "next/link";

function Notfound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Not Found</h1>
        <Link href="/" className="text-slate-400 mt-5">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default Notfound;
