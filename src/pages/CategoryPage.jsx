import CategorySlide from "./CategorySlide";

function CategoryPage() {
  return (
    <main className="container">
      <section>
        <div className="d-flex justify-content-center">
          <h1>
            <b>Category Page</b>
          </h1>
        </div>
      </section>
      <section className="">
        <CategorySlide />
      </section>
    </main>
  );
}
export default CategoryPage;
