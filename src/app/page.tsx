import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
   return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
         <h1 className="text-6xl font-bold text-purple-700">Financinho</h1>
         <Link href="/dashboard">
            <Button className="text-lg px-6 py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-2xl shadow-lg transition-all duration-200">Dashboard</Button>
         </Link>
      </div>
   );
}
