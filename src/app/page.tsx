import Link from "next/link";
import { prisma } from "@/db";
import { TodoItem } from "@/components/todoItem"



export async function CreateTodo(title) {
  await prisma.todo.create({data: {title: title, complete: false}});

}

export async function getTodos () {
  return (await prisma.todo.findMany({}));
}

export async function togleTodo(id: string, title: string, complete: boolean) {
  "use server"

}

export default async function Home () {
  
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1"> Todos </h1>
        <Link href="/new" > New </Link>
      </header>
      <ul className="p1-4"> 
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} togleTodo={togleTodo} />
        ))}      
      </ul>
    </>
  );
}

