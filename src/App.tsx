import { H1 } from "./components/common/typography";
import { useAsync } from "react-use";

export function App() {
  const state = useAsync(() => window.Main.config.read("example"));

  return (
    <H1>
      Hello from main: {state.value}
    </H1>
  );
}
