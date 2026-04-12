export type Product = {
  id: number;
  title: string;
  rating?: number;
  reviews?: number;
  price: string;
  colors: string[];
  image: string;
  isNew?: boolean;
  oldPrice?: string | null;
  size?: string;
};

export const catalogProducts: Product[] = [
  {
    id: 1,
    title: 'Cosapots Mondo Round Planter - 19"H-40"H',
    rating: 5,
    reviews: 1,
    price: '$379.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'],
    image: '/flowerpots-hero.png'
  },
  {
    id: 2,
    title: 'Cosapots Orbo Globe Sphere Planter - 20"H-30"H',
    price: '$399.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-flowerpot.png'
  },
  {
    id: 3,
    title: 'Cosapots Lofto Tall Round Planter - 30"H-43"H',
    rating: 5,
    reviews: 2,
    price: '$349.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-planters.png'
  },
  {
    id: 4,
    title: 'Cosapots Semplitio Modular Rectangle Planter Collection - 39"L x 19"W',
    price: '$749.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-vanity.png'
  },
  {
    id: 5,
    title: 'Cosapots Mondo High Tall Round Planter - 17" D x 30"H',
    price: '$549.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'],
    image: '/services-countertop.png'
  },
  {
    id: 6,
    title: 'Cosapots Reglito Cube Planter - 20"H-40"H',
    price: '$579.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-sinks.png'
  },
  {
    id: 7,
    title: 'Cosapots Reglo Modular Rectangle Planter Collection - 11" Wide',
    price: '$399.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/services-blocks.png'
  },
  {
    id: 8,
    title: 'Cosapots Semplitio Grand Wide Rectangle Planter - 59"L x 19"W x 23"H',
    price: '$1,299.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/banner.png'
  },
  {
    id: 9,
    title: 'Cosapots Lupo Tapered Round Planter - 15.4"H-28.3"H',
    isNew: true,
    price: '$299.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-stool.png'
  },
  {
    id: 10,
    title: 'Cosapots Reglito Tall Square Planter - 19"W x 31"H',
    price: '$719.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-flowerpot.png'
  },
  {
    id: 11,
    title: 'Cosapots Lonno Extra Large Long Rectangular Planter',
    isNew: true,
    price: '$1,699.95',
    colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'],
    image: '/project-planters.png'
  }
];

export const catalogSinks: Product[] = [
  { id: 101, title: "Square Sink", price: "$132.00", oldPrice: "$155.00", size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'], image: "/project-vanity.png" },
  { id: 102, title: "Oval Sink", price: "$112.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/project-flowerpot.png" },
  { id: 103, title: "Round Sink", price: "$54.00", oldPrice: null, size: "Size: 4x8x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/project-stool.png" },
  { id: 104, title: "Rectangle Sink", price: "$105.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/services-countertop.png" },
  { id: 105, title: "Square Sink", price: "$132.00", oldPrice: "$155.00", size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'], image: "/services-blocks.png" },
  { id: 106, title: "Oval Sink", price: "$112.00", oldPrice: null, size: "Size: 4x5x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/project-vanity.png" },
  { id: 107, title: "Round Sink", price: "$54.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/project-stool.png" },
  { id: 108, title: "Rectangle Sink", price: "$105.00", oldPrice: null, size: "Size: 4x5x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/project-flowerpot.png" },
  { id: 201, title: "Square Sink", price: "$132.00", oldPrice: "$156.00", size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#584d46', '#313231'], image: "/sink img.jpg" },
  { id: 202, title: "Oval Sink", price: "$112.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/sink img.jpg" },
  { id: 203, title: "Round Sink", price: "$54.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/sink img.jpg" },
  { id: 204, title: "Rectangle Sink", price: "$105.00", oldPrice: null, size: "Size: 4x6x2", colors: ['#eaddcd', '#9dafb0', '#818382', '#313231'], image: "/sink img.jpg" }
];
