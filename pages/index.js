import Image from "next/image";
import { Inter } from "next/font/google";
import Home from './Home'
const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <Home />
  );
}
