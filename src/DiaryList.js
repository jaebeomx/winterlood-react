import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onRemove, onEdit }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((item, i) => {
          return (
            <DiaryItem
              key={item.id}
              {...item}
              onEdit={onEdit}
              onRemove={onRemove}
            ></DiaryItem>
          );
        })}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
