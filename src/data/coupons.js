export const coupons = [
  {
    code: 'WELCOME20',
    type: 'percentage',
    value: 20,
    minPurchase: 50,
    maxDiscount: 100,
    description: '20% OFF on your first purchase above $50',
    active: true,
    expiresAt: '2026-12-31'
  },
  {
    code: 'SAVE10',
    type: 'percentage',
    value: 10,
    minPurchase: 30,
    maxDiscount: 50,
    description: '10% OFF on all orders above $30',
    active: true,
    expiresAt: '2026-12-31'
  },
  {
    code: 'FLAT50',
    type: 'flat',
    value: 50,
    minPurchase: 250,
    maxDiscount: 50,
    description: 'Flat $50 OFF on orders above $250',
    active: true,
    expiresAt: '2026-12-31'
  },
  {
    code: 'FREESHIP',
    type: 'shipping',
    value: 15, // standard shipping waived
    minPurchase: 40,
    maxDiscount: 15,
    description: 'Free standard shipping on orders over $40',
    active: true,
    expiresAt: '2026-12-31'
  }
];
