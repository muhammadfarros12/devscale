import { useQuery } from '@tanstack/react-query';
import type { MockTodo } from '../types';

export default function useMockTodos() {
  return useQuery<MockTodo[]>({
    queryKey: [],
    queryFn: async () => {
        const res = await fetch("http://localhost:8000/mock-todos?throttle=true");
        const todos = await res.json();
        return todos;
    },
});
}
