import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.scss";
import { Input } from "./components/Input";
import { Submit } from "./components/Submit";
import { ClipboardText, RocketLaunch } from "@phosphor-icons/react";
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
    let currentValue = taskListAfterClick.find(
      (task) => task.id === item.id
    )!.value;

    taskListAfterClick.find((task) => task.id === item.id)!.value =
      !currentValue;

    setTaskList([...taskListAfterClick]);
  }

  function handleDeleteButton(item: listItem) {
    console.log(taskList.filter((task) => task.id !== item.id))
    let taskListAfterClickDelete = taskList.filter((task) => task.id !== item.id);
    setTaskList(state => taskListAfterClickDelete);
  }

  return (
    <main className={styles.toDoWrapper}>
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
        <header
          className={`${styles.countHeader}  ${
            taskList.length ? "" : styles.countHeaderborder
          }`}
        >
          <div>
            <span className={styles.countHeaderitemCounter}>
              Tarefas criadas
            </span>
            <div className={styles.countHeaderCounter}>{taskList.length}</div>
          </div>

          <div>
            <span className={styles.countHeaderconcludedItem}>Concluídas</span>
            <div className={styles.countHeaderCounter}>
              {taskList.length
                ? `${taskList.filter((task) => task.value).length} de ${
                    taskList.length
                  }`
                : taskList.length}
            </div>
          </div>
        </header>

        <div className={styles.listContent}>
          {taskList.length ? (
            taskList.map((task) => {
              return (
                <div key={task.id}>
                  <CheckBox
                    CheckboxItem={task}
                    onClick={() => handleClickTask(task)}
                    onDeleteItem={handleDeleteButton}
                  />
                </div>
              );
            })
          ) : (
            <div className={styles.noDataField}>
              <ClipboardText size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p className={styles.noDataFieldlastText}>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
