import { useState } from "react";
import "./styles.css";

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
  const [completeTodos, setCCompleteTodos] = useState([
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
    setCCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-erea">
        {/* 初期値につかうコンポーネントと、変更処理を記載 */}
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-erea">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // ループする場合、変更前と変更後の差分の目印が必要なので、keyを付ける
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* リロード時に読み込ませない様にするために、アロー関数を使う */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-erea">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
