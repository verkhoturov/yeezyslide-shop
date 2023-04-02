import { CatalogItem, ServerCatalogItem } from "./types";

export const formatterWPDataToCatalogItem = (
  wpData: ServerCatalogItem[]
): CatalogItem[] => {
  return wpData.map((item) => {
    const {
      id,
      slug,
      acf: {
        article,
        releaseDate,
        composition,
        price,
        discount,
        inStock,
        model,
        sizes,
        colors,
      },
      title: { rendered: title },
    } = item;

    return {
      id,
      slug,
      article,
      releaseDate,
      composition,
      color: colors.colorName,
      title,
      previewImg: colors.images[0].sizes.medium_large,
      pageImg: colors.images[0].sizes.large,
      gallery: colors.images.map((i) => i.sizes.large),
      price: Number(price),
      discount: discount ? Number(discount) : null,
      inStock,
      model,
      sizes,
    };
  });
};
