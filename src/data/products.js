export const products = [
  // -------------------------------------------------------------
  // ELECTRONICS (8 Items)
  // -------------------------------------------------------------
  {
    id: 'lumina-pro-wireless-headphones',
    name: 'Lumina Pro Wireless Headphones',
    slug: 'lumina-pro-wireless-headphones',
    category: 'electronics',
    subcategory: 'Audio',
    brand: 'Lumina Audio',
    shortDescription: 'Active noise-canceling over-ear headphones with 40h battery & spatial audio.',
    description: 'Engineered for audiophiles and daily commuters alike, Lumina Pro delivers studio-grade acoustics through custom 40mm beryllium drivers. Dynamic spatial audio technology tracks head movements for immersion, while tri-microphone ANC cancels up to 38dB of ambient noise.',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    rating: 4.8,
    reviewCount: 142,
    stock: 25,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=90',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=90',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=90'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=90',
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Silver White', hex: '#e5e7eb' },
      { name: 'Midnight Navy', hex: '#1e293b' }
    ],
    sizes: [],
    tags: ['audio', 'wireless', 'noise-canceling', 'bluetooth', 'premium'],
    specifications: {
      'Driver Size': '40mm Beryllium',
      'Battery Life': 'Up to 40 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.3 / 3.5mm Aux',
      'Noise Cancellation': 'Adaptive Active ANC',
      'Weight': '265g',
      'Warranty': '2 Years Limited'
    }
  },
  {
    id: 'velox-book-15-ultra',
    name: 'Velox Book 15 Ultra Laptop',
    slug: 'velox-book-15-ultra',
    category: 'electronics',
    subcategory: 'Laptops & Computers',
    brand: 'Velox Tech',
    shortDescription: 'Ultra-thin aluminum laptop with 3.2K OLED display & 16-core processor.',
    description: 'Precision milled from aircraft-grade aluminum alloy, the Velox Book 15 Ultra combines staggering performance with 18-hour battery longevity. Features a 120Hz OLED screen with 100% DCI-P3 color accuracy for creative professionals.',
    price: 1499.00,
    originalPrice: 1699.00,
    discount: 12,
    rating: 4.9,
    reviewCount: 88,
    stock: 12,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Starlight Silver', hex: '#e2e8f0' },
      { name: 'Matte Black', hex: '#0f172a' }
    ],
    sizes: ['16GB RAM / 512GB SSD', '32GB RAM / 1TB SSD'],
    tags: ['laptop', 'ultra-portable', 'oled', 'computing', 'creators'],
    specifications: {
      'Processor': 'Velox X1 16-Core Chip',
      'Display': '15.6" 3.2K OLED 120Hz',
      'RAM': '16GB / 32GB Unified Memory',
      'Storage': '512GB / 1TB NVMe Gen4',
      'Weight': '1.35 kg',
      'OS': 'AuraOS Professional'
    }
  },
  {
    id: 'lumina-soundbar-360',
    name: 'Lumina Soundbar 360 Dolby Atmos',
    slug: 'lumina-soundbar-360',
    category: 'electronics',
    subcategory: 'Audio',
    brand: 'Lumina Audio',
    shortDescription: 'Immersive home theater audio bar with wireless subwoofer.',
    description: 'Transform your living room into an IMAX acoustic experience. Soundbar 360 features 9 upward and side-firing drivers accompanied by an 8-inch wireless down-firing subwoofer.',
    price: 449.99,
    originalPrice: 499.99,
    discount: 10,
    rating: 4.7,
    reviewCount: 64,
    stock: 18,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Charcoal Black', hex: '#1e293b' }],
    sizes: [],
    tags: ['soundbar', 'home-theater', 'audio', 'dolby-atmos'],
    specifications: {
      'Total Power output': '450W RMS',
      'Channels': '5.1.2 Surround',
      'Subwoofer': '8-inch Wireless',
      'HDMI Ports': 'eARC / HDMI 2.1 Pass-through'
    }
  },
  {
    id: 'velox-smartwatch-ultra',
    name: 'Velox Smartwatch Ultra GPS',
    slug: 'velox-smartwatch-ultra',
    category: 'electronics',
    subcategory: 'Wearables',
    brand: 'Velox Tech',
    shortDescription: 'Titanium outdoor smartwatch with dual-frequency GPS & ECG monitoring.',
    description: 'Built for rugged endurance. Features a sapphire crystal touchscreen, 100m water resistance, dual-band GPS satellite tracking, and continuous heart rate & SpO2 health diagnostics.',
    price: 379.00,
    originalPrice: 429.00,
    discount: 11,
    rating: 4.8,
    reviewCount: 112,
    stock: 30,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Titanium Gray', hex: '#64748b' },
      { name: 'Alpine Orange', hex: '#f97316' }
    ],
    sizes: ['45mm', '49mm'],
    tags: ['smartwatch', 'fitness', 'gps', 'titanium', 'wearables'],
    specifications: {
      'Case Material': 'Grade 5 Aerospace Titanium',
      'Water Resistance': '100 Meters / 10 ATM',
      'Battery Life': 'Up to 7 Days (Regular Use)',
      'Sensors': 'ECG, SpO2, Optical HR, Altimeter'
    }
  },
  {
    id: 'lumina-buds-air',
    name: 'Lumina Buds Air True Wireless',
    slug: 'lumina-buds-air',
    category: 'electronics',
    subcategory: 'Audio',
    brand: 'Lumina Audio',
    shortDescription: 'Featherlight ANC earbuds with wireless charging case.',
    description: 'Weighing only 4.2g per earbud, Lumina Buds Air offer crystal clear voice calls via bone-conduction mics and deep resonance bass response.',
    price: 129.99,
    originalPrice: 159.99,
    discount: 18,
    rating: 4.6,
    reviewCount: 95,
    stock: 40,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Ceramic White', hex: '#f8fafc' },
      { name: 'Obsidian Black', hex: '#0f172a' }
    ],
    sizes: [],
    tags: ['earbuds', 'wireless', 'bluetooth', 'audio'],
    specifications: {
      'Battery Life': '6h (Earbuds) + 24h (Case)',
      'Water Resistance': 'IPX5 Sweatproof',
      'Codec Support': 'LDAC, AAC, SBC'
    }
  },
  {
    id: 'velox-pad-pro-11',
    name: 'Velox Pad Pro 11-inch Tablet',
    slug: 'velox-pad-pro-11',
    category: 'electronics',
    subcategory: 'Laptops & Computers',
    brand: 'Velox Tech',
    shortDescription: 'Liquid Retina screen tablet supporting magnetic stylus & detachable keyboard.',
    description: 'Versatile digital canvas for artists, writers, and power users. Includes magnetic wireless stylus charging and seamless multi-tasking window management.',
    price: 699.00,
    originalPrice: 799.00,
    discount: 12,
    rating: 4.7,
    reviewCount: 52,
    stock: 14,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Space Gray', hex: '#475569' },
      { name: 'Rose Gold', hex: '#f43f5e' }
    ],
    sizes: ['128GB Wi-Fi', '256GB Wi-Fi + 5G'],
    tags: ['tablet', 'stylus', 'digital-art', 'touchscreen'],
    specifications: {
      'Screen Size': '11.0-inch 120Hz ProMotion',
      'Resolution': '2388 x 1668 Pixels',
      'Camera': '12MP Wide + 10MP Ultra Wide'
    }
  },
  {
    id: 'aura-mechanical-keyboard',
    name: 'AURA Mechanical Studio Keyboard',
    slug: 'aura-mechanical-keyboard',
    category: 'electronics',
    subcategory: 'Laptops & Computers',
    brand: 'AURA Studio',
    shortDescription: 'Gasket-mounted hot-swappable wireless mechanical keyboard.',
    description: 'Machined aluminum chassis, custom lubricated linear switches, and per-key RGB backlighting. Provides a creamy, satisfying acoustic feel.',
    price: 189.00,
    originalPrice: 219.00,
    discount: 13,
    rating: 4.9,
    reviewCount: 167,
    stock: 22,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Retro Off-White', hex: '#f1f5f9' },
      { name: 'Deep Space Navy', hex: '#1e1b4b' }
    ],
    sizes: ['75% Compact', '100% Full Size'],
    tags: ['keyboard', 'mechanical', 'custom', 'desk-setup'],
    specifications: {
      'Mounting Style': 'Gasket Mount',
      'Switch Type': 'AURA Linear Cream Switches',
      'Keycaps': 'Double-shot PBT',
      'Battery': '4000mAh (Wireless Bluetooth / 2.4GHz)'
    }
  },
  {
    id: 'velox-4k-webcam-pro',
    name: 'Velox 4K Studio Webcam',
    slug: 'velox-4k-webcam-pro',
    category: 'electronics',
    subcategory: 'Laptops & Computers',
    brand: 'Velox Tech',
    shortDescription: 'Ultra HD 4K webcam with dual noise-reduction microphones & AI framing.',
    description: 'Deliver studio presentation quality on video calls with HDR auto-exposure, dual stereo beamforming mics, and privacy shutter.',
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 41,
    stock: 35,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Matte Graphite', hex: '#334155' }],
    sizes: [],
    tags: ['webcam', 'streaming', '4k', 'video-calls'],
    specifications: {
      'Max Resolution': '4K @ 30fps / 1080p @ 60fps',
      'Field of View': '90° Adjustable FOV',
      'Focus Type': 'Auto HDR Focus'
    }
  },

  // -------------------------------------------------------------
  // FASHION (6 Items)
  // -------------------------------------------------------------
  {
    id: 'aura-overcoat-wool',
    name: 'AURA Minimalist Italian Wool Overcoat',
    slug: 'aura-overcoat-wool',
    category: 'fashion',
    subcategory: "Men's Wear",
    brand: 'AURA Studio',
    shortDescription: 'Double-breasted tailored coat crafted from 100% virgin Italian merino wool.',
    description: 'Uncompromising outerwear tailored for modern elegance. Satin lined with hand-stitched lapels, horn buttons, and functional interior passport pockets.',
    price: 349.00,
    originalPrice: 420.00,
    discount: 16,
    rating: 4.9,
    reviewCount: 78,
    stock: 15,
    featured: true,
    bestSeller: true,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Camel Tan', hex: '#d97706' },
      { name: 'Charcoal Gray', hex: '#334155' },
      { name: 'Midnight Black', hex: '#0f172a' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['overcoat', 'wool', 'luxury', 'outerwear', 'menswear'],
    specifications: {
      'Material': '100% Virgin Merino Wool',
      'Lining': '100% Cupro Satin',
      'Fit': 'Tailored Regular Fit',
      'Care': 'Dry Clean Only'
    }
  },
  {
    id: 'aura-cashmere-crewneck',
    name: 'AURA Pure Cashmere Knit Sweater',
    slug: 'aura-cashmere-crewneck',
    category: 'fashion',
    subcategory: "Women's Wear",
    brand: 'AURA Studio',
    shortDescription: 'Ultra-soft Mongolian cashmere knit with rib-trimmed cuffs.',
    description: 'Lightweight warmth crafted from Grade-A 2-ply cashmere yarns. Exceptionally soft against skin with a relaxed drape suited for all seasons.',
    price: 198.00,
    originalPrice: 240.00,
    discount: 17,
    rating: 4.8,
    reviewCount: 94,
    stock: 20,
    featured: true,
    bestSeller: false,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Oatmeal Beige', hex: '#e2e8f0' },
      { name: 'Dusty Rose', hex: '#f43f5e' },
      { name: 'Sage Green', hex: '#10b981' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    tags: ['cashmere', 'knitwear', 'womenswear', 'luxury'],
    specifications: {
      'Fabric': '100% Grade-A Mongolian Cashmere',
      'Gauge': '12-Gauge Knit',
      'Fit': 'Relaxed Fit'
    }
  },
  {
    id: 'aura-linen-shirt',
    name: 'AURA French Linen Relaxed Shirt',
    slug: 'aura-linen-shirt',
    category: 'fashion',
    subcategory: "Men's Wear",
    brand: 'AURA Studio',
    shortDescription: 'Breathable 100% organic French linen button-down shirt.',
    description: 'Pre-washed for instant softness. Keeps you cool in warm weather with a laid-back button-down silhouette.',
    price: 89.00,
    originalPrice: 110.00,
    discount: 19,
    rating: 4.6,
    reviewCount: 51,
    stock: 30,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Sky Blue', hex: '#38bdf8' },
      { name: 'Olive Gray', hex: '#475569' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['linen', 'shirt', 'summer', 'casual'],
    specifications: {
      'Material': '100% Organic French Flax Linen',
      'Care': 'Machine wash cold, hang dry'
    }
  },
  {
    id: 'aura-trench-coat',
    name: 'AURA Weatherproof Double Trench Coat',
    slug: 'aura-trench-coat',
    category: 'fashion',
    subcategory: 'Jackets',
    brand: 'AURA Studio',
    shortDescription: 'Water-resistant cotton gabardine trench coat with storm flap.',
    description: 'Classic double-breasted trench coat with removable waist belt, tortoise-shell buttons, and storm resistant cotton weave.',
    price: 289.00,
    originalPrice: 350.00,
    discount: 17,
    rating: 4.9,
    reviewCount: 63,
    stock: 14,
    featured: false,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1548624149-f1af3492b839?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1548624149-f1af3492b839?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Classic Khaki', hex: '#d97706' },
      { name: 'Black', hex: '#0f172a' }
    ],
    sizes: ['S', 'M', 'L'],
    tags: ['trench', 'coat', 'rainwear', 'fashion'],
    specifications: {
      'Shell': 'Water-Repellent Cotton Gabardine',
      'Lining': 'Heritage Check Cotton'
    }
  },
  {
    id: 'aura-selvedge-denim',
    name: 'AURA Japanese Selvedge Slim Denim',
    slug: 'aura-selvedge-denim',
    category: 'fashion',
    subcategory: 'Denim',
    brand: 'AURA Studio',
    shortDescription: '14oz raw Japanese indigo selvedge denim jeans.',
    description: 'Woven on vintage shuttle looms in Kurashiki, Japan. Features red-line selvedge ID, custom brass hardware, and a modern slim-tapered fit.',
    price: 165.00,
    originalPrice: 195.00,
    discount: 15,
    rating: 4.7,
    reviewCount: 45,
    stock: 25,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Deep Raw Indigo', hex: '#1e3a8a' }],
    sizes: ['30x32', '32x32', '34x32', '36x32'],
    tags: ['denim', 'selvedge', 'japan', 'jeans'],
    specifications: {
      'Weight': '14oz Raw Denim',
      'Origin': 'Okayama, Japan',
      'Fit': 'Slim Tapered'
    }
  },
  {
    id: 'aura-heavyweight-hoodie',
    name: 'AURA Organic Heavyweight Fleece Hoodie',
    slug: 'aura-heavyweight-hoodie',
    category: 'fashion',
    subcategory: 'Activewear',
    brand: 'AURA Studio',
    shortDescription: '450 GSM combed organic cotton oversized hoodie.',
    description: 'Double-walled hood, ribbed side gussets, and pre-shrunk heavyweight French terry fleece engineered for maximum structure and warmth.',
    price: 110.00,
    originalPrice: 130.00,
    discount: 15,
    rating: 4.9,
    reviewCount: 138,
    stock: 32,
    featured: false,
    bestSeller: true,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Heater Gray', hex: '#94a3b8' },
      { name: 'Washed Black', hex: '#1e293b' },
      { name: 'Forest Green', hex: '#064e3b' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['hoodie', 'streetwear', 'fleece', 'casual'],
    specifications: {
      'Fabric Density': '450 GSM Organic Cotton',
      'Details': 'Double-layer Hood, No Drawstrings'
    }
  },

  // -------------------------------------------------------------
  // SHOES (5 Items)
  // -------------------------------------------------------------
  {
    id: 'urban-stride-runner-v2',
    name: 'Urban Stride Runner V2 Athletic Sneaker',
    slug: 'urban-stride-runner-v2',
    category: 'shoes',
    subcategory: 'Running Shoes',
    brand: 'Urban Stride',
    shortDescription: 'Lightweight responsive cushion road runner with breathable knit upper.',
    description: 'Engineered for distance running and urban sprints. Features nitrogen-infused foam midsole for 75% energy return and durable continental rubber outsole grip.',
    price: 145.00,
    originalPrice: 175.00,
    discount: 17,
    rating: 4.8,
    reviewCount: 119,
    stock: 28,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Triple White', hex: '#ffffff' },
      { name: 'Core Black', hex: '#0f172a' },
      { name: 'Neon Volt', hex: '#84cc16' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    tags: ['sneakers', 'running', 'footwear', 'sports'],
    specifications: {
      'Weight': '230g (US Size 9)',
      'Drop': '8mm Heel-to-Toe',
      'Midsole': 'NitroFoam High Energy Cushion'
    }
  },
  {
    id: 'atelier-chelsea-leather-boot',
    name: 'Atelier Handmade Leather Chelsea Boot',
    slug: 'atelier-chelsea-leather-boot',
    category: 'shoes',
    subcategory: 'Boots',
    brand: 'Atelier Leather',
    shortDescription: 'Handcrafted full-grain Italian leather Chelsea boot with Goodyear welt.',
    description: 'Timeless footwear built to last decades. Hand-finished full-grain leather with elastic side goring and stacked leather heel.',
    price: 275.00,
    originalPrice: 320.00,
    discount: 14,
    rating: 4.9,
    reviewCount: 82,
    stock: 12,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Cognac Brown', hex: '#78350f' },
      { name: 'Onyx Black', hex: '#0f172a' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    tags: ['boots', 'leather', 'chelsea', 'handmade'],
    specifications: {
      'Construction': '360 Goodyear Welt',
      'Upper': 'Full-Grain Calfskin Leather',
      'Sole': 'Vibram Rubber Grip Sole'
    }
  },
  {
    id: 'urban-stride-retro-court',
    name: 'Urban Stride Retro Court Sneaker',
    slug: 'urban-stride-retro-court',
    category: 'shoes',
    subcategory: 'Sneakers',
    brand: 'Urban Stride',
    shortDescription: 'Minimalist heritage leather tennis sneaker.',
    description: 'Clean silhouette inspired by 1970s court icons. Soft nappa leather upper paired with memory foam footbed.',
    price: 119.00,
    originalPrice: 140.00,
    discount: 15,
    rating: 4.7,
    reviewCount: 67,
    stock: 35,
    featured: false,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'White / Gum', hex: '#f8fafc' },
      { name: 'White / Navy', hex: '#1e3a8a' }
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    tags: ['sneakers', 'court', 'minimalist', 'casual'],
    specifications: {
      'Upper': 'Nappa Leather',
      'Footbed': 'OrthoLite Memory Foam'
    }
  },
  {
    id: 'atelier-oxford-derby',
    name: 'Atelier Classic Leather Oxford Derby',
    slug: 'atelier-oxford-derby',
    category: 'shoes',
    subcategory: 'Formals',
    brand: 'Atelier Leather',
    shortDescription: 'Polished calfskin dress shoe with hand-burnished toe.',
    description: 'Sleek dress shoe for formal black-tie events or executive boardroom meetings. Leather lined for climate control.',
    price: 230.00,
    originalPrice: 270.00,
    discount: 15,
    rating: 4.8,
    reviewCount: 38,
    stock: 16,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Burnished Tan', hex: '#92400e' },
      { name: 'Polished Black', hex: '#0f172a' }
    ],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    tags: ['formal', 'oxford', 'derby', 'leather'],
    specifications: {
      'Upper': 'Hand-Finished Calfskin',
      'Outsole': 'Stitched Leather Sole'
    }
  },
  {
    id: 'urban-stride-hiking-boot',
    name: 'Urban Stride Waterproof Trail Boot',
    slug: 'urban-stride-hiking-boot',
    category: 'shoes',
    subcategory: 'Boots',
    brand: 'Urban Stride',
    shortDescription: 'All-terrain waterproof hiking boot with Gore-Tex liner.',
    description: 'Tackle technical mountain trails with confidence. Ankle support collar, protective toe cap, and high-traction lug outsole.',
    price: 189.99,
    originalPrice: 219.99,
    discount: 13,
    rating: 4.7,
    reviewCount: 54,
    stock: 20,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Earth Brown', hex: '#78350f' },
      { name: 'Forest Charcoal', hex: '#334155' }
    ],
    sizes: ['US 8.5', 'US 9.5', 'US 10.5', 'US 11.5'],
    tags: ['hiking', 'boots', 'waterproof', 'outdoor'],
    specifications: {
      'Membrane': 'Waterproof Breathable Lining',
      'Lugs': '5mm Multi-Directional Grip'
    }
  },

  // -------------------------------------------------------------
  // BEAUTY & CARE (4 Items)
  // -------------------------------------------------------------
  {
    id: 'botanica-glow-serum',
    name: 'Botanica Hydra-Glow Vitamin C Serum',
    slug: 'botanica-glow-serum',
    category: 'beauty',
    subcategory: 'Skincare',
    brand: 'Botanica Organics',
    shortDescription: '15% L-Ascorbic Acid + Hyaluronic Acid brightening facial serum.',
    description: 'Formulated with cold-pressed botanical extracts and triple-molecular hyaluronic acid to combat hyperpigmentation, smooth fine lines, and boost skin radiance.',
    price: 68.00,
    originalPrice: 85.00,
    discount: 20,
    rating: 4.9,
    reviewCount: 204,
    stock: 50,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['30 ml / 1.0 fl. oz.'],
    tags: ['serum', 'skincare', 'vitamin-c', 'botanical', 'glow'],
    specifications: {
      'Key Ingredients': '15% Vitamin C, Ferulic Acid, Hyaluronic Acid',
      'Skin Types': 'All Skin Types (Dermatologist Tested)',
      'Ethics': '100% Vegan & Cruelty-Free'
    }
  },
  {
    id: 'botanica-velvet-fragrance',
    name: 'Botanica Velvet Santal Eau de Parfum',
    slug: 'botanica-velvet-fragrance',
    category: 'beauty',
    subcategory: 'Fragrance',
    brand: 'Botanica Organics',
    shortDescription: 'Warm Australian sandalwood, cardamom & cedarwood EDP.',
    description: 'An alluring unisex fragrance blending smokey Australian sandalwood, spiced cardamom, iris flower, and soft leather notes.',
    price: 135.00,
    originalPrice: 160.00,
    discount: 15,
    rating: 4.8,
    reviewCount: 76,
    stock: 22,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['50 ml', '100 ml'],
    tags: ['perfume', 'fragrance', 'sandalwood', 'luxury'],
    specifications: {
      'Fragrance Family': 'Woody & Spicy',
      'Concentration': 'Eau de Parfum (20% Essential Oils)'
    }
  },
  {
    id: 'botanica-night-recovery-cream',
    name: 'Botanica Ceramide Night Repair Cream',
    slug: 'botanica-night-recovery-cream',
    category: 'beauty',
    subcategory: 'Skincare',
    brand: 'Botanica Organics',
    shortDescription: 'Deep moisture barrier recovery cream with squalane & peptides.',
    description: 'Restores stressed skin overnight. Rich non-comedogenic texture infused with 5 essential ceramides and botanical peptides.',
    price: 74.00,
    originalPrice: 88.00,
    discount: 16,
    rating: 4.7,
    reviewCount: 91,
    stock: 35,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['50 ml / 1.7 oz'],
    tags: ['moisturizer', 'ceramides', 'night-cream', 'skincare'],
    specifications: {
      'Texture': 'Rich Whipped Cream',
      'Free From': 'Parabens, Sulfates, Artificial Fragrance'
    }
  },
  {
    id: 'botanica-argan-hair-oil',
    name: 'Botanica Organic Argan Elixir Hair Oil',
    slug: 'botanica-argan-hair-oil',
    category: 'beauty',
    subcategory: 'Haircare',
    brand: 'Botanica Organics',
    shortDescription: 'Nourishing heat protectant oil for silky smooth hair.',
    description: 'Cold-pressed Moroccan Argan and Jojoba oils tame frizz, add luminous shine, and protect hair against thermal heat damage up to 230°C.',
    price: 42.00,
    originalPrice: 50.00,
    discount: 16,
    rating: 4.8,
    reviewCount: 118,
    stock: 45,
    featured: false,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1608248597261-5421d55ab385?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1608248597261-5421d55ab385?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['100 ml'],
    tags: ['hair-oil', 'argan', 'haircare', 'shine'],
    specifications: {
      'Key Oils': 'Organic Argan, Jojoba, Rosehip Oil',
      'Heat Protection': 'Up to 230°C / 450°F'
    }
  },

  // -------------------------------------------------------------
  // HOME & LIVING (5 Items)
  // -------------------------------------------------------------
  {
    id: 'nordic-lounge-chair',
    name: 'Nordic Craft Ergonomic Lounge Chair',
    slug: 'nordic-lounge-chair',
    category: 'home-living',
    subcategory: 'Furniture',
    brand: 'Nordic Craft',
    shortDescription: 'Solid oak lounge chair with bouclé fabric cushioning.',
    description: 'Scandinavian minimalist design crafted from sustainably harvested solid European white oak. Features ergonomic lumbar curvature and textured cream bouclé upholstery.',
    price: 549.00,
    originalPrice: 650.00,
    discount: 15,
    rating: 4.9,
    reviewCount: 37,
    stock: 8,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Cream Bouclé', hex: '#fef08a' },
      { name: 'Charcoal Linen', hex: '#334155' }
    ],
    sizes: [],
    tags: ['chair', 'furniture', 'scandinavian', 'home-decor'],
    specifications: {
      'Frame': '100% European White Oak',
      'Upholstery': 'Stain-Resistant Textured Bouclé',
      'Dimensions': '78cm W x 82cm D x 74cm H'
    }
  },
  {
    id: 'nordic-pendant-light',
    name: 'Nordic Craft Matte Amber Glass Pendant',
    slug: 'nordic-pendant-light',
    category: 'home-living',
    subcategory: 'Lighting',
    brand: 'Nordic Craft',
    shortDescription: 'Hand-blown amber glass ceiling pendant fixture.',
    description: 'Casts a warm ambient glow across dining tables or kitchen islands. Brass hardware detailing with adjustable braided fabric cable.',
    price: 179.00,
    originalPrice: 210.00,
    discount: 15,
    rating: 4.8,
    reviewCount: 48,
    stock: 14,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Warm Amber', hex: '#d97706' },
      { name: 'Smoked Gray', hex: '#64748b' }
    ],
    sizes: ['Diameter: 28cm', 'Diameter: 35cm'],
    tags: ['lighting', 'pendant', 'glass', 'decor'],
    specifications: {
      'Glass Type': 'Hand-Blown Borosilicate',
      'Bulb Socket': 'E26 / E27 (LED Compatible)'
    }
  },
  {
    id: 'nordic-ceramic-vase-set',
    name: 'Nordic Craft Sculptural Ceramic Vase Set',
    slug: 'nordic-ceramic-vase-set',
    category: 'home-living',
    subcategory: 'Decor',
    brand: 'Nordic Craft',
    shortDescription: 'Set of 3 matte textured ceramic architectural vases.',
    description: 'Artisanal stoneware ceramics with tactile sandy matte finishes. Perfect statement accent pieces for mantlepieces, shelves, or coffee tables.',
    price: 89.00,
    originalPrice: 105.00,
    discount: 15,
    rating: 4.7,
    reviewCount: 62,
    stock: 25,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Terracotta & Sand', hex: '#ea580c' }],
    sizes: [],
    tags: ['decor', 'ceramic', 'vases', 'artisanal'],
    specifications: {
      'Material': 'High-Fired Matte Stoneware',
      'Quantity': '3 Piece Set'
    }
  },
  {
    id: 'aura-pour-over-kettle',
    name: 'AURA Precision Gooseneck Electric Kettle',
    slug: 'aura-pour-over-kettle',
    category: 'home-living',
    subcategory: 'Kitchenware',
    brand: 'AURA Studio',
    shortDescription: 'Variable temperature gooseneck kettle with hold timer.',
    description: 'Pour over perfection down to the degree. Features counterbalanced handle, LCD digital temp display, and 1200W quick heating element.',
    price: 129.00,
    originalPrice: 149.00,
    discount: 13,
    rating: 4.9,
    reviewCount: 156,
    stock: 28,
    featured: false,
    bestSeller: true,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Matte Black', hex: '#0f172a' },
      { name: 'Brushed Brass', hex: '#ca8a04' }
    ],
    sizes: ['0.9 Liter'],
    tags: ['kettle', 'coffee', 'kitchen', 'appliance'],
    specifications: {
      'Capacity': '0.9 L / 30 oz',
      'Temp Range': '40°C - 100°C (104°F - 212°F)',
      'Power': '1200W Rapid Heating'
    }
  },
  {
    id: 'nordic-linen-duvet-set',
    name: 'Nordic Craft Stonewashed Linen Duvet Cover Set',
    slug: 'nordic-linen-duvet-set',
    category: 'home-living',
    subcategory: 'Bedding',
    brand: 'Nordic Craft',
    shortDescription: '100% French flax stonewashed breathable linen bedding.',
    description: 'Gets softer with every wash. Thermo-regulating natural flax linen keeps you cool in summer and cozy throughout winter.',
    price: 210.00,
    originalPrice: 250.00,
    discount: 16,
    rating: 4.8,
    reviewCount: 79,
    stock: 18,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Dusty Olive', hex: '#65a30d' },
      { name: 'Soft Sand', hex: '#e2e8f0' }
    ],
    sizes: ['Queen', 'King'],
    tags: ['bedding', 'linen', 'duvet', 'bedroom'],
    specifications: {
      'Material': '100% French Flax Linen',
      'Includes': '1 Duvet Cover + 2 Pillow Shams'
    }
  },

  // -------------------------------------------------------------
  // SPORTS & OUTDOORS (3 Items)
  // -------------------------------------------------------------
  {
    id: 'velox-smart-jump-rope',
    name: 'Velox Smart LED Fitness Jump Rope',
    slug: 'velox-smart-jump-rope',
    category: 'sports',
    subcategory: 'Fitness Equipment',
    brand: 'Velox Tech',
    shortDescription: 'Bluetooth jump rope with embedded LED jump count display in mid-air.',
    description: 'Revolutionize cardio workouts. Embedded LEDs project jump metrics mid-air as you turn the rope while syncing stats directly to your health app.',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 83,
    stock: 40,
    featured: false,
    bestSeller: true,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Electric Red', hex: '#dc2626' }],
    sizes: [],
    tags: ['fitness', 'jumprope', 'smart-gear', 'cardio'],
    specifications: {
      'Connectivity': 'Bluetooth 5.0 App Sync',
      'Battery': 'Rechargeable USB-C (30 Days use)'
    }
  },
  {
    id: 'aura-eco-yoga-mat',
    name: 'AURA Natural Cork Non-Slip Yoga Mat',
    slug: 'aura-eco-yoga-mat',
    category: 'sports',
    subcategory: 'Yoga & Wellness',
    brand: 'AURA Studio',
    shortDescription: 'Organic cork top layer with natural tree rubber cushion base.',
    description: 'Superior grip that actually increases as you sweat. Antimicrobial organic cork surface backed by heavy-duty 5mm eco tree rubber cushioning.',
    price: 85.00,
    originalPrice: 100.00,
    discount: 15,
    rating: 4.9,
    reviewCount: 92,
    stock: 35,
    featured: true,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    colors: [{ name: 'Natural Cork', hex: '#b45309' }],
    sizes: ['72" x 24" (5mm Thick)'],
    tags: ['yoga', 'mat', 'cork', 'wellness'],
    specifications: {
      'Top Material': '100% Natural Organic Cork',
      'Base Material': 'Biodegradable Tree Rubber',
      'Thickness': '5mm Extra Cushioning'
    }
  },
  {
    id: 'velox-insulated-bottle',
    name: 'Velox 32oz Vacuum Thermal Water Flask',
    slug: 'velox-insulated-bottle',
    category: 'sports',
    subcategory: 'Outdoor Gear',
    brand: 'Velox Tech',
    shortDescription: 'Triple-wall stainless vacuum insulated bottle keeps cold 24h.',
    description: 'Leak-proof magnetic cap design. Keeps beverages ice cold for 24 hours or piping hot for 12 hours without condensation sweat.',
    price: 38.00,
    originalPrice: 45.00,
    discount: 15,
    rating: 4.8,
    reviewCount: 140,
    stock: 60,
    featured: false,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Matte Olive', hex: '#4d7c0f' },
      { name: 'Cobalt Blue', hex: '#1d4ed8' },
      { name: 'Obsidian', hex: '#0f172a' }
    ],
    sizes: ['32 oz / 950 ml'],
    tags: ['water-bottle', 'outdoor', 'insulated', 'sports'],
    specifications: {
      'Insulation': 'Triple-Wall Vacuum Sealed 18/8 Steel',
      'BPA Free': '100% Non-toxic'
    }
  },

  // -------------------------------------------------------------
  // ACCESSORIES (4 Items)
  // -------------------------------------------------------------
  {
    id: 'aura-titanium-sunglasses',
    name: 'AURA Japanese Titanium Aviator Sunglasses',
    slug: 'aura-titanium-sunglasses',
    category: 'accessories',
    subcategory: 'Sunglasses',
    brand: 'AURA Studio',
    shortDescription: 'Ultra-lightweight Japanese beta-titanium frame with polarized lenses.',
    description: 'Weighing less than 16 grams, these hand-finished aviator sunglasses feature AR-coated polarized TAC lenses providing 100% UV400 protection.',
    price: 175.00,
    originalPrice: 210.00,
    discount: 16,
    rating: 4.9,
    reviewCount: 56,
    stock: 20,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Brushed Gold / G15 Lens', hex: '#ca8a04' },
      { name: 'Matte Black / Smoke', hex: '#0f172a' }
    ],
    sizes: [],
    tags: ['sunglasses', 'titanium', 'eyewear', 'polarized'],
    specifications: {
      'Frame': 'Japanese Beta Titanium',
      'Lens': 'Category 3 Polarized TAC (UV400)',
      'Weight': '15.8 grams'
    }
  },
  {
    id: 'atelier-slim-wallet',
    name: 'Atelier RFID Leather Cardholder Wallet',
    slug: 'atelier-slim-wallet',
    category: 'accessories',
    subcategory: 'Wallets',
    brand: 'Atelier Leather',
    shortDescription: 'Minimalist RFID-blocking full-grain leather slim wallet.',
    description: 'Holds up to 8 cards and folded cash without adding bulk to your front pocket. Features pull-tab quick access card slot and Faraday RFID shielding.',
    price: 48.00,
    originalPrice: 60.00,
    discount: 20,
    rating: 4.8,
    reviewCount: 178,
    stock: 45,
    featured: false,
    bestSeller: true,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Chestnut Brown', hex: '#78350f' },
      { name: 'Black Sapphire', hex: '#0f172a' }
    ],
    sizes: [],
    tags: ['wallet', 'cardholder', 'leather', 'rfid'],
    specifications: {
      'Leather': 'Vegetable-Tanned Full-Grain Leather',
      'Capacity': '8 Cards + Cash Pocket',
      'Protection': 'Integrated RFID Blocking'
    }
  },
  {
    id: 'atelier-leather-belt',
    name: 'Atelier Italian Vegetable Tanned Leather Belt',
    slug: 'atelier-leather-belt',
    category: 'accessories',
    subcategory: 'Belts',
    brand: 'Atelier Leather',
    shortDescription: 'Solid brass buckle 35mm wide genuine leather dress belt.',
    description: 'Hand-dyed in Tuscany. Patinates beautifully over time with solid forged brass nickel buckle hardware.',
    price: 65.00,
    originalPrice: 75.00,
    discount: 13,
    rating: 4.7,
    reviewCount: 42,
    stock: 25,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Tan Brown', hex: '#b45309' },
      { name: 'Classic Black', hex: '#0f172a' }
    ],
    sizes: ['32', '34', '36', '38'],
    tags: ['belt', 'leather', 'accessories'],
    specifications: {
      'Width': '35mm (1.38 inches)',
      'Hardware': 'Solid Brushed Nickel'
    }
  },
  {
    id: 'aura-cashmere-beanie',
    name: 'AURA Ribbed Pure Cashmere Beanie',
    slug: 'aura-cashmere-beanie',
    category: 'accessories',
    subcategory: 'Hats',
    brand: 'AURA Studio',
    shortDescription: 'Double-cuffed rib knit soft cashmere winter beanie hat.',
    description: 'Sumptuously soft ribbed cashmere watch cap. Provides breathable insulated warmth without itchiness.',
    price: 62.00,
    originalPrice: 75.00,
    discount: 17,
    rating: 4.8,
    reviewCount: 88,
    stock: 30,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Heather Charcoal', hex: '#475569' },
      { name: 'Camel', hex: '#d97706' },
      { name: 'Off White', hex: '#f8fafc' }
    ],
    sizes: ['One Size Fits All'],
    tags: ['beanie', 'cashmere', 'hat', 'winter'],
    specifications: {
      'Material': '100% Cashmere',
      'Knit': '7-Gauge Chunky Rib'
    }
  },

  // -------------------------------------------------------------
  // WATCHES (3 Items)
  // -------------------------------------------------------------
  {
    id: 'solaris-automatic-chronograph',
    name: 'Solaris Heritage Automatic Chronograph Watch',
    slug: 'solaris-automatic-chronograph',
    category: 'watches',
    subcategory: 'Chronographs',
    brand: 'Solaris Timepieces',
    shortDescription: '41mm Swiss automatic chronograph with sapphire exhibition case back.',
    description: 'Precision horology housing a 28,800 bph self-winding mechanical movement with 48-hour power reserve. Features scratch-resistant AR sapphire glass and hand-stitched Horween leather strap.',
    price: 890.00,
    originalPrice: 1050.00,
    discount: 15,
    rating: 4.9,
    reviewCount: 43,
    stock: 7,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Sunburst Navy Dial', hex: '#1e3a8a' },
      { name: 'Panda White Dial', hex: '#f8fafc' }
    ],
    sizes: ['41mm Case Width'],
    tags: ['watch', 'chronograph', 'automatic', 'swiss', 'luxury'],
    specifications: {
      'Movement': 'Solaris Calibre 880 Automatic (28,800 vph)',
      'Case': '316L Stainless Steel (41mm x 12.5mm)',
      'Glass': 'Double-Domed Sapphire Crystal with AR Coating',
      'Water Resistance': '10 ATM / 100 Meters'
    }
  },
  {
    id: 'solaris-minimalist-quartz',
    name: 'Solaris Slim Minimalist Steel Watch',
    slug: 'solaris-minimalist-quartz',
    category: 'watches',
    subcategory: 'Minimalist',
    brand: 'Solaris Timepieces',
    shortDescription: 'Ultra-thin 6.5mm stainless steel mesh wrist watch.',
    description: 'Refined understated elegance. Japanese precision quartz movement housed in a sleek ultra-slim 38mm stainless steel case with quick-release mesh bracelet.',
    price: 165.00,
    originalPrice: 195.00,
    discount: 15,
    rating: 4.7,
    reviewCount: 65,
    stock: 22,
    featured: false,
    bestSeller: false,
    newArrival: true,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Brushed Steel', hex: '#94a3b8' },
      { name: 'Rose Gold', hex: '#f43f5e' }
    ],
    sizes: ['38mm Case Width'],
    tags: ['watch', 'minimalist', 'mesh', 'slim'],
    specifications: {
      'Case Thickness': '6.5mm',
      'Movement': 'Miyota Japanese Quartz',
      'Strap': 'Quick-Release Milanese Mesh'
    }
  },
  {
    id: 'solaris-diver-300m',
    name: 'Solaris Professional Diver 300M Automatic',
    slug: 'solaris-diver-300m',
    category: 'watches',
    subcategory: 'Classic Analog',
    brand: 'Solaris Timepieces',
    shortDescription: '300m water resistant diver with ceramic rotating bezel & Super-LumiNova.',
    description: 'Built for deep ocean exploration. Unidirectional 120-click ceramic bezel, screw-down crown, and luminous hands that shine brightly in deep darkness.',
    price: 495.00,
    originalPrice: 580.00,
    discount: 14,
    rating: 4.9,
    reviewCount: 52,
    stock: 11,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Ocean Blue', hex: '#1d4ed8' },
      { name: 'Matte Black', hex: '#0f172a' }
    ],
    sizes: ['42mm Case Width'],
    tags: ['watch', 'diver', 'waterproof', 'automatic'],
    specifications: {
      'Water Resistance': '300M / 30 ATM ISO Certified',
      'Bezel': '120-Click Unidirectional Ceramic'
    }
  },

  // -------------------------------------------------------------
  // BAGS & BACKPACKS (3 Items)
  // -------------------------------------------------------------
  {
    id: 'atelier-leather-weekender',
    name: 'Atelier Full-Grain Leather Weekender Duffel',
    slug: 'atelier-leather-weekender',
    category: 'bags',
    subcategory: 'Duffel Bags',
    brand: 'Atelier Leather',
    shortDescription: '45L handcrafted travel duffel bag with shoe compartment.',
    description: 'The ultimate travel companion for weekend escapes. Crafted from vegetable-tanned Italian leather with reinforced solid brass rivets, padded shoulder strap, and side zipper shoe slot.',
    price: 389.00,
    originalPrice: 450.00,
    discount: 13,
    rating: 4.9,
    reviewCount: 71,
    stock: 10,
    featured: true,
    bestSeller: true,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Cognac Saddle Leather', hex: '#78350f' },
      { name: 'Espresso Brown', hex: '#451a03' }
    ],
    sizes: ['45 Liters (Carry-On Approved)'],
    tags: ['duffel', 'leather', 'travel', 'weekender', 'bags'],
    specifications: {
      'Material': 'Full-Grain Artisan Calfskin',
      'Capacity': '45 Liters',
      'Dimensions': '52cm x 28cm x 26cm',
      'Weight': '2.1 kg'
    }
  },
  {
    id: 'aura-commuter-backpack',
    name: 'AURA Waterproof Tech Commuter Backpack 22L',
    slug: 'aura-commuter-backpack',
    category: 'bags',
    subcategory: 'Backpacks',
    brand: 'AURA Studio',
    shortDescription: 'Weatherproof cordura backpack with TSA 16" laptop compartment.',
    description: 'Sleek geometric design featuring YKK AquaGuard waterproof zippers, hidden passport pocket, luggage pass-through strap, and plush padded laptop sleeve.',
    price: 139.00,
    originalPrice: 165.00,
    discount: 15,
    rating: 4.8,
    reviewCount: 114,
    stock: 24,
    featured: true,
    bestSeller: false,
    newArrival: true,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Matte Obsidian', hex: '#0f172a' },
      { name: 'Stealth Olive', hex: '#365314' }
    ],
    sizes: ['22 Liters (Fits up to 16" Laptop)'],
    tags: ['backpack', 'commuter', 'tech', 'waterproof'],
    specifications: {
      'Shell Material': '1000D Recycled Cordura Nylon',
      'Laptop Sleeve': 'Padded Suspended 16" Pocket'
    }
  },
  {
    id: 'atelier-canvas-tote',
    name: 'Atelier Heavy Canvas & Leather Everyday Tote',
    slug: 'atelier-canvas-tote',
    category: 'bags',
    subcategory: 'Totes',
    brand: 'Atelier Leather',
    shortDescription: '24oz wax-treated canvas tote with bridle leather handles.',
    description: 'Rugged elegance for farmers markets, beach trips, or daily errands. Reinforced double-stitched base and interior magnetic snap enclosure.',
    price: 89.00,
    originalPrice: 105.00,
    discount: 15,
    rating: 4.7,
    reviewCount: 49,
    stock: 30,
    featured: false,
    bestSeller: false,
    newArrival: false,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Natural Canvas / Tan', hex: '#e2e8f0' },
      { name: 'Navy / Brown', hex: '#1e3a8a' }
    ],
    sizes: ['18 Liter Capacity'],
    tags: ['tote', 'canvas', 'everyday', 'bag'],
    specifications: {
      'Canvas': '24oz Heavy Duty Waxed Cotton',
      'Handles': 'English Bridle Leather'
    }
  },

  // -------------------------------------------------------------
  // GOURMET GROCERY (2 Items)
  // -------------------------------------------------------------
  {
    id: 'aura-single-origin-coffee',
    name: 'AURA Ethiopian Yirgacheffe Whole Bean Coffee',
    slug: 'aura-single-origin-coffee',
    category: 'grocery',
    subcategory: 'Coffee & Tea',
    brand: 'AURA Studio',
    shortDescription: 'Single-origin light roast coffee with bergamot & jasmine notes.',
    description: 'Freshly artisan-roasted in micro-batches. Grade 1 heirloom beans washed in spring water, displaying vibrant floral aromatics and bright citrus acidity.',
    price: 24.00,
    originalPrice: 28.00,
    discount: 14,
    rating: 4.9,
    reviewCount: 165,
    stock: 50,
    featured: false,
    bestSeller: true,
    newArrival: true,
    trending: false,
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['340g / 12oz Bag', '1kg / 2.2lb Bag'],
    tags: ['coffee', 'ethiopia', 'whole-bean', 'gourmet'],
    specifications: {
      'Roast Level': 'Light-Medium Specialty Roast',
      'Altitude': '1,900 - 2,200 Meters',
      'Process': 'Fully Washed'
    }
  },
  {
    id: 'aura-organic-matcha',
    name: 'AURA Ceremonial Grade Uji Japanese Matcha',
    slug: 'aura-organic-matcha',
    category: 'grocery',
    subcategory: 'Coffee & Tea',
    brand: 'AURA Studio',
    shortDescription: '100% Organic first-harvest ceremonial grade green tea powder.',
    description: 'Shade-grown in Kyoto, Japan and stone-ground by hand. Silky smooth texture with vibrant jade color and rich umami flavor profile.',
    price: 36.00,
    originalPrice: 42.00,
    discount: 14,
    rating: 4.9,
    reviewCount: 132,
    stock: 40,
    featured: true,
    bestSeller: false,
    newArrival: false,
    trending: true,
    images: [
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1000&q=80'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    colors: [],
    sizes: ['30g Tin (30 Servings)'],
    tags: ['matcha', 'green-tea', 'japan', 'organic'],
    specifications: {
      'Origin': 'Uji, Kyoto, Japan',
      'Grade': 'First Harvest Ceremonial Grade',
      'Certification': 'JAS Organic Certified'
    }
  }
];
