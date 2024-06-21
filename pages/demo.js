import LoginButton from "../components/login-btn";
import Link from "next/link";

export default function Demo() {
  return (
    <>
      <LoginButton />
      <div className="text-center py-8">
                <Link href="/market" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 shadow-lg">
                    Tienda
                </Link>
            </div>
    </>
  );
}
