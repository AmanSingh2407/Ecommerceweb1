import { products } from '../data/products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';

/**
 * Product Service API abstraction
 */
export const productService = {
  // Get all products with optional filters, search, sort, pagination
  getProducts: async ({ category, subcategory, brand, search, priceMin, priceMax, rating, inStock, featured, trending, bestSeller, newArrival, sortBy, page = 1, limit = 12 } = {}) => {
    // Simulate network delay for realistic loading UX
    await new Promise((resolve) => setTimeout(resolve, 250));

    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase());
    }

    if (brand) {
      filtered = filtered.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (priceMin !== undefined && priceMin !== null && priceMin !== '') {
      filtered = filtered.filter(p => p.price >= Number(priceMin));
    }

    if (priceMax !== undefined && priceMax !== null && priceMax !== '') {
      filtered = filtered.filter(p => p.price <= Number(priceMax));
    }

    if (rating) {
      filtered = filtered.filter(p => p.rating >= Number(rating));
    }

    if (inStock) {
      filtered = filtered.filter(p => p.stock > 0);
    }

    if (featured) {
      filtered = filtered.filter(p => p.featured);
    }

    if (trending) {
      filtered = filtered.filter(p => p.trending);
    }

    if (bestSeller) {
      filtered = filtered.filter(p => p.bestSeller);
    }

    if (newArrival) {
      filtered = filtered.filter(p => p.newArrival);
    }

    // Sort logic
    if (sortBy) {
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
          break;
        case 'discount-high':
          filtered.sort((a, b) => b.discount - a.discount);
          break;
        case 'popular':
          filtered.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
        default: // 'featured'
          filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      }
    }

    const totalCount = filtered.length;
    const startIndex = (page - 1) * limit;
    const paginatedProducts = filtered.slice(startIndex, startIndex + limit);

    return {
      products: paginatedProducts,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page
    };
  },

  getProductByIdOrSlug: async (idOrSlug) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const product = products.find(p => p.id === idOrSlug || p.slug === idOrSlug);
    if (!product) throw new Error('Product not found');
    return product;
  },

  getCategories: async () => {
    return categories;
  },

  getBrands: async () => {
    return brands;
  },

  getRelatedProducts: async (product, limit = 4) => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return products
      .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
      .slice(0, limit);
  },

  getRecommendations: async (limit = 4) => {
    return products.filter(p => p.trending || p.bestSeller).slice(0, limit);
  }
};
