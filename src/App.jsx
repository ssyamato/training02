import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  // 入力部分のステート化
  const [todoText, setTodoText] = useState("");

  //　onChange（何かしらの変更が加わった場合の処理）を記載。
  // テキスト入力はお決まり
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 表示する未完了TODOリストをステート化
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);

  // 表示する完了TODOリストをステート化
  const [completeTodos, setCompleteTodos] = useState([
    "ううううう",
    "えええええ"
  ]);

  // 追加ボタン押下時の処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    // 未完了TODOに新しいテキストを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン押下時の処理を追加
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 指定した添え字から何要素削除するか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン押下時の処理を追加
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 指定した添え字から何要素削除するか
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン押下時の処理を追加
  const onClickBack = (index) => {
    // 完了TODOから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了TODOに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* Propsにしてコンポーネントに渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
