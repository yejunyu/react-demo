import "./notify.css";

const Notify = ({ msg, notifyStyle }) => {
  console.log(notifyStyle);
  if (!msg) return null;
  return <div className={notifyStyle}>{msg}</div>;
};
export default Notify;
