import Link from "next/link";
import "./globals.css";
import Image from "next/image";
// import font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="light">
      <body>
        {/* Buat Header */}
        <header>
        {/* <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="Picture of the author"
      /> */}
      {/* Folder public tidak usah disebut */}
      {/* <img src={"../images/logo.png"} alt="ini LOGO UTI" /> */}

          <Image src={"/images/logo.png"} alt="Logo UTI" width={320} height={60} priority></Image>

        </header>
        {/* Buat Menu */}
        <nav className="mt-2.5 text-center">
        {/* <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full py-1 px-3 text-white">Subscribe</button> */}
          <Link href={"/"} className="bg-merah hover:bg-kuning rounded-full py-5px px-10 text-putih mr-5px">Data Mahasiswa</Link>
          <Link href={"/"} className="bg-cyan-500 hover:bg-hitam-tengah hover:text-putih rounded-full py-1 px-3 text-white ml-5">Log data Mahasiswa</Link>          
          
        </nav>
          <section className="m-20px">
        {/* Buat Konten/isi */}
        {children}
        </section>
        {/* Buat Footer */}
        <footer className="text-merah bg-kuning text-center">
            Copyright &Copy; 2024 - Muhammad Refo Febrian
        </footer>
      </body>
    </html>
  );
}
