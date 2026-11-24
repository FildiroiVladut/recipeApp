import { elements } from "./base";

// Scaled servings produce values like 0.3125; keep the input readable
const roundCount = (count) => Math.round(count * 100) / 100;

export const renderItem = (item) => {
  const markup = `
      <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
               <input type="number" value="${roundCount(item.count)}" step="any" min="0" class="shopping__count-value">
               <p>${item.unit}</p>
            </div>
               <p class="shopping__description">${item.ingredient}</p>
               <button class="shopping__delete btn-tiny">
                  <svg>
                     <use href="img/icons.svg#icon-circle-with-cross"></use>
                  </svg>
               </button>
      </li>
   `;

  elements.shopping.insertAdjacentHTML("beforeend", markup);
};

export const deleteItem = (id) => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if (item) {
    item.parentElement.removeChild(item);
  }
};
