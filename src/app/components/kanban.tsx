// eslint-disable-next-line @typescript-eslint/no-explicit-any
import React from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

export const Kanban = () => {
  return (
    <div className="h-screen w-full bg-[#f2f2f2]">
      <Board />
    </div>
  );
};

const DEFAULT_TASKS = [
  //todo
  { id: 1, title: "Faire le ménage", column: "todo" },
  { id: 2, title: "Faire les courses", column: "todo" },
  { id: 3, title: "Faire du sport", column: "todo" },
];

interface ColumnProps {
  title: string;
  headingColor: string;
  tasks: any[];
  column: string;
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
}

const Board = () => {
  const [tasks, setTasks] = React.useState(DEFAULT_TASKS);
  return (
    <div className="flex h-full w-full justify-center gap-16 overflow-scroll p-12">
      <Column
        title="À faire"
        headingColor="text-[#F25757]"
        column="todo"
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        title="En cours"
        headingColor="text-[#FFBA08]"
        column="inprogress"
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        title="Terminé"
        headingColor="text-[#8DB580]"
        column="done"
        tasks={tasks}
        setTasks={setTasks}
      />
      <BurnBarrel setTasks={setTasks} />
    </div>
  );
};

const Column = ({
  title,
  headingColor,
  tasks,
  column,
  setTasks,
}: ColumnProps) => {
  const [active, setActive] = React.useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: any) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = 1;
  };

  const clearHighlights = (els: any = undefined) => {
    const indicators = els || getIndicators();

    indicators.forEach((i: any) => {
      i.style.opacity = "0";
    });
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const getNearestIndicator = (e: any, indicators: any) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest: any, child: any) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    );

    return el;
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setActive(false);
    clearHighlights();

    const taskId = e.dataTransfer.getData("taskId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== taskId) {
      let copy = [...tasks];
      let taskToTransfert = copy.find((c) => c.id === taskId);

      if (!taskToTransfert) return;

      taskToTransfert = { ...taskToTransfert, column };

      copy = copy.filter((c) => c.id !== taskId);
      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(taskToTransfert);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, taskToTransfert);
      }
      setTasks(copy);
    }
  };

  const filteredTasks = tasks.filter((task) => task.column === column);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`text-3xl font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-lg text-neutral-400">
          {filteredTasks.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-300" : "bg-[#f2f2f2]"
        }`}
      >
        {filteredTasks.map((task) => (
          <Task key={task.id} {...task} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId="-1" column={column} />
        <AddTask column={column} setTasks={setTasks} />
      </div>
    </div>
  );
};

const Task = ({ title, column, id, handleDragStart }: any) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />

      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { id, title, column })}
        className="active:cusor-grabbing cursor-grab rounded border border-neutral-200 bg-white p-3 shadow"
      >
        <p>{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }: any) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-pink-300 opacity-0"
    ></div>
  );
};

const BurnBarrel = ({ setTasks }: any) => {
  const [active, setActive] = React.useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const taskId = e.dataTransfer.getData("taskId");
    console.log(taskId);

    setTasks((prev: any) => prev.filter((c: any) => c.id !== taskId));

    setActive(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active ? "bg-[#F25757]/20 text-red-500" : "bg-[#f2f2f2]"
      } cursor-pointer text-gray-500 hover:bg-[#F25757]/20 hover:text-red-500`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddTask = ({ column, setTasks }: any) => {
  const [text, setText] = React.useState("");
  const [adding, setAdding] = React.useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const newTask = {
      id: Math.random().toString(),
      title: text,
      column,
    };

    setTasks((prev: any) => [...prev, newTask]);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Ajouter une tache"
            className="w-full rounded border border-violet-200 bg-violet-400/20 p-3 text-sm text-neutral-800 placeholder:text-violet-600 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="text-neutral-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              <span>Ajouter</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-600"
        >
          <span>Ajouter une tache</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};
