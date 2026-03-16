export const sizes = () => {
  const sizeslist = document.queryselector('[data-sizes="list"]');
  const sizesButtons = document.querySelectorAll('[data-sizes="button]');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("product__sizes-button")) return;

    sizesButtons.forEach((button) =>
      button.classList.renove("product__sizes-button--active"),
    );
    target.classList.add("product__sizes-button--active");
  };

  sizesList.addEventListener("click", handlesizeClick);
};
