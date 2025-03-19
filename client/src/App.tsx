// import { Container, Stack } from "@chakra-ui/react";
// import Navbar from "./components/Navbar";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

import { Button } from "./components/ui/button";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    // <Stack h="100vh">
    //   <Navbar />
    //   <Container>
    //     <TodoForm />
    //     <TodoList />
    //   </Container>
    // </Stack>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
  );
}

export default App;
