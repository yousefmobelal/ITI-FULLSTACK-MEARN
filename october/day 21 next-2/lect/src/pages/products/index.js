import React from "react";

const index = ({ products }) => {
  console.log(products);
  return (
    <div className="row">
      {products.map((p) => {
        return (
          <div class="card col-12 col-lg-4" key={p.id}>
            <img
              src={p.thumbnail}
              class="card-img-top"
              alt="..."
              height="100"
            />
            <div class="card-body">
              <h5 class="card-title">{p.title}</h5>
              <p class="card-text">{p.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    const data = await res.json();
    return {
      props: {
        products: data || [],
      },
    };
  } catch (err) {
    console.log(err);
  }
}
