export const Tweet = ({ body, author, date, id }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text fw-bold">{"@" + author}</div>
        <div className="card-text">{body}</div>
        <small className=" text-muted">
          {date.substr(8, 2)}/{date.substr(5, 2)}/{date.substr(0, 4)} -{" "}
          {date.substr(11, 8)}
        </small>
      </div>
    </div>
  );
};
