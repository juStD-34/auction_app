export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="loading__content__icon ">
        {/* spinning */}
        <img className="mx-auto my-auto" src="https://aamattress.com/cdn/shop/t/8/assets/loading.gif?v=157493769327766696621686015831" alt="loading" />
        {/* sun */}
        <img className="mx-auto my-auto" src="https://user-images.githubusercontent.com/580843/93560399-fbdac900-f979-11ea-840a-dc51aca1c630.gif" alt="loading" />
        </div>
      </div>
    </div>
  );
}
