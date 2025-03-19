import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../App";
import TodoItem from "./TodoItem";

export type Todo = {
  _id: number;
  body: string;
  completed: boolean;
};

const TodoList = () => {
  const { data: todos, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const res = await fetch(BASE_URL + "/todos");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data || [];
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-2 uppercase bg-gradient-to-l from-blue-500 to-cyan-400 text-transparent bg-clip-text">
        Today's Tasks
      </h1>

      {isLoading && (
        <div className="flex justify-center my-4">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {!isLoading && todos?.length === 0 && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl text-center text-gray-500">
            All tasks completed! 🤞
          </p>
          <img src="/go.png" alt="Go logo" width={70} height={70} />
        </div>
      )}

      <div className="flex flex-col gap-3">
        {todos?.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
