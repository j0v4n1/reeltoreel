import './loading.css';
export default function Loading() {
  return (
    <div className="loading-spinner">
      <img
        className="loading-spinner__image"
        src="/public/images/loading-spinner.svg"
        alt=""
      />
    </div>
  );
}
