import React from "react";
import Image from 'next/image'

const RecipesComponent = (props) => {
  const { recipes } = props;
  console.log(recipes);
  return (
    <div>
      <h1>Recipes</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((r) => {
            return (
              <tr
              key={r.id}
              >
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td><Image src={r.image} width={80} height={80}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecipesComponent;
