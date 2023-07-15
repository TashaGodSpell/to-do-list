import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.scss";
import { Input } from "./components/Input";
import { Submit } from "./components/Submit";
import { RocketLaunch } from "@phosphor-icons/react";
import { CheckBox } from "./components/CheckBox";

export interface listItem {
  id: number;
  label: string;
  value: boolean;
}

function App() {
  const [newTaskData, setNewTaskData] = useState("");
  const [taskList, setTaskList] = useState<Array<listItem>>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskData(event.target.value);
  }

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTaskList([
      ...taskList,
      {
        label: newTaskData,
        value: false,
        id: taskList.length++,
      },
    ]);

    setNewTaskData("");
  }

  function handleClickTask(item: listItem) {
    let taskListAfterClick = taskList;
    let currentValue = taskListAfterClick.find((task) => task.id === item.id)!.value;

    taskListAfterClick.find((task) => task.id === item.id)!.value = !currentValue;

    setTaskList([...taskListAfterClick]);
  }

  console.log(taskList);

  return (
    <div className={styles.toDoWrapper}>
      <header>
        <div className={styles.pageTitle}>
          <RocketLaunch size={32} weight="fill" />
          <span className={styles.pageTitleFirst}>to</span>
          <span className={styles.pageTitleSecond}>do</span>
        </div>

        <form onSubmit={(event) => handleAddTask(event)}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskData}
            isFilled={!!newTaskData}
            onChange={(event) => handleNewTaskChange(event)}
          />

          <Submit disabled={!!!newTaskData} />
        </form>
      </header>

      <section>
        <header>teas</header>

        <div className={styles.listContent}>
          {taskList.map((task) => {
            return (
              <div key={task.id}>
                <CheckBox
                  CheckboxItem={task}
                  onClick={() => handleClickTask(task)}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
