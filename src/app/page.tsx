import Image from "next/image";
import logo from '../public/favicon.ico';

export default function Home() {
  return (
    <>
  <Image src={logo} alt="Logo" width={500} height={500} />;
  </>
  );
}
