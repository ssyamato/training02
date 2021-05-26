import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <div className="complete-erea">
      <p className="title">完了のTODO</p>
      <ul>
        {/* コンポーネントを展開 */}
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
