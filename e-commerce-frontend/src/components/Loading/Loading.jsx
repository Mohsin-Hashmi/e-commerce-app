import "./Loading.css";

const Loading = () => {
  return (
    <div className="shimmerGrid">
      {Array(10)
        .fill()
        .map((_, index) => (
          <div key={index} className="shimmerCard">
            <div className="shimmerImage"></div>
            <div className="shimmerDetail">
              <div className="shimmerTitle"></div>
              <div className="shimmerPrice"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Loading;
