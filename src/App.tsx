import { ChangeEvent, useState } from "react";
import styles from "./App.module.scss";
import { Input } from "./components/Input";

function App() {
  const [newTaskData, setNewTaskData] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskData(event.target.value);
  }

  return (
    <div className={styles.toDoWrapper}>
      <header>
        <form>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskData}
            isFilled={!!newTaskData}
            onChange={(event) => handleNewTaskChange(event)}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
