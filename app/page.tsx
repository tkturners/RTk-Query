"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { decrement, increment } from "@/src/features/counter/counterSlice";
import TodoList from "@/src/components/TodoList";

export default function Home() {
  const dispatch = useDispatch();
  const countData = useSelector((state: any) => state?.counterReducer?.count);
  const theData = useSelector((state: any) => state.todosApi?.queries);
  console.log("🥰🐶🐠🐬🦋⚽️===>countData", countData);
  console.log("🥰🐶🐠🐬🦋⚽️===>theData", theData);
  return (
    <main className={styles.main}>
      <div>
        <h1>Counter</h1>
        <h5>Increment</h5>
        <button onClick={() => dispatch(increment())}>+</button>
        <h5>Decrement</h5>
        <button onClick={() => dispatch(decrement())}>-</button>

        <h3>Count - {countData}</h3>
        <TodoList />
      </div>
    </main>
  );
}
