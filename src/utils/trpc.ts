import type { AppRouter } from '@/backend/router/index';
// utils/trpc.ts
import { createReactQueryHooks } from '@trpc/react';


export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}