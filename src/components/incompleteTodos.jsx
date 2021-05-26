import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete } = props;

  return (
    <div className="incomplete-erea">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* コンポーネントを展開 */}
        {incompleteTodos.map((todo, index) => {
          return (
            // ループする場合、変更前と変更後の差分の目印が必要なので、keyを付ける
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* リロード時に読み込ませない様にするために、アロー関数を使う */}
              <button onClick={() => onClickComplete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
