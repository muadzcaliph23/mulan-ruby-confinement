import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex bg-gray-100 items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-[60px] font-bold text-center">404</h2>
            <p className="text-center font-semibold">
              Maaf laman tidak dijumpai
            </p>
          </div>
          <Link href="/" replace>
            <Button className="text-center mt-5 w-full">Laman Utama</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
