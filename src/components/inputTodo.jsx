import React from "react";

const style = {};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-erea">
      {/* 初期値につかうコンポーネントと、変更処理を記載 */}
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
