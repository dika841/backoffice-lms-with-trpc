import { appRouter } from "@/lib/trpc/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
  });

export { handler as GET, handler as POST };
