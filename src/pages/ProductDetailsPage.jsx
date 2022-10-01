import React from "react";
import "../styles/productdetailpages.scss";
import CategorySlide from "../pages/CategorySlide";

function ProductDetailsPage() {
  return (
    <main className="container">
      <section className=" d-flex ">
        <div className=" w-50">
          <img
            className="product-details-image-items"
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="image not found"
          />
        </div>

        <div className=" w-50 text-center p-5 ">
          <h1 className="">Product name</h1>
          <br />

          <div className=" d-flex">
            <h6 className=" w-50">5 Star</h6>
            <h6 className=" w-50">Rating</h6>
          </div>

          <br />
          <p className=" w-100 ">
            <h3>
              <b>$500/</b>
            </h3>
          </p>
          <br />
          <p>
            <h6 className="w-100 ">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </h6>
          </p>
          <br />
          <button className="btn btn-outline-warning w-50">add to cart</button>
        </div>
      </section>
      <section>
        <h3>Ratings and Reviews</h3>
        <br />
        <h1>4.0 ✭</h1>
        <br />

        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <br />
          <p>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains."
          </p>
          <br />
          <p>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains."
          </p>

          <div className="gap-5 d-flex  ">
            <div>
              <button className="btn px-5 py-2  btn-warning">
                <b>View All Reviews</b>
              </button>
            </div>
            <div className="">
              <button className="btn px-5 py-2 btn-outline-warning">
                <b>Rate Product</b>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Product Description</h1>
        <p>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
        <p>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </section>
      <section>
        <div className="d-flex  justify-content-between">
          <h1>Similar Products</h1>
          <button className="btn btn-warning  w-25 ">
            <b>View all</b>
          </button>
        </div>
        <div className="d-flex m-2">
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
        </div>
      </section>
      <section>
        <div className="d-flex  justify-content-between">
          <h1>Recently Viewed</h1>
          <button className="btn btn-warning w-25">
            <b>View all</b>
          </button>
        </div>
        <div className="d-flex m-2">
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
          <CategorySlide />
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
