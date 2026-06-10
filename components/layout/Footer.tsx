import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F0A1E] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <Link href="/" className="flex items-center gap-8">
            <Image
              src="/e-moon-logo.png"
              alt="emoon logo"
              width={104}
              height={104}
            />
          </Link>
          <div className="flex gap-6 text-sm text-white/50">
            <Link
              href="/pricing"
              className="hover:text-white transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/#showcase"
              className="hover:text-white transition-colors"
            >
              Demo
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
          </div>
        </div>
        <div className="text-center text-white/30 text-sm border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Emoon (eformku.id). All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Standar Baru Form Digital Vendor.</p>
        </div>
      </div>
    </footer>
  );
}

