// app/api/auth/[...nextauth]/route.ts
import { GET, POST } from "@/lib/auth";
export { GET, POST };
export const dynamic = "force-dynamic"; // Importante para auth