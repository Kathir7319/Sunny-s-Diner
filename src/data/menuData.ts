import { MenuItem, MenuCategory } from '../types';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  heroImage: string;
  imageAlt: string;
}

export const menuCategories: CategoryInfo[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    tagline: 'Farm-Fresh Morning Favorites',
    description: 'Farm-fresh eggs cooked to order, crisp bacon, golden hash browns, buttered toast, and hearty morning skillets.',
    badge: 'Served All Morning',
    heroImage: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Classic American breakfast with sunny eggs, crispy bacon, sausage, and toasted bread',
  },
  {
    id: 'griddle',
    name: 'Griddle Favorites',
    tagline: 'Fluffy Pancakes & Golden Waffles',
    description: 'Fresh-off-the-griddle buttermilk pancakes, malted Belgian waffles, and thick golden French toast with warm syrup.',
    badge: 'Diner Signature',
    heroImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fluffy buttermilk pancakes stacked high with melting butter and pure maple syrup',
  },
  {
    id: 'meat-and-three',
    name: 'Meat & Three',
    tagline: 'Authentic Southern Diner Plates',
    description: 'Choose your hearty comfort entree paired with three scratch-made southern sides and fresh warm cornbread or biscuit.',
    badge: 'Southern Classic',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Savory roast meat platter with home-cooked vegetable sides and homestyle gravy',
  },
  {
    id: 'specials',
    name: 'Daily Specials',
    tagline: 'Kitchen Blackboard Features',
    description: 'Rotating blackboard specialties crafted daily. Check our Facebook page or ask your server for today’s featured comfort plates.',
    badge: 'Blackboard Board',
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Chefs daily blackboard special plate freshly prepared at the diner counter',
  },
];

/**
 * Sunny's Diner Centralized Menu Dataset
 * 
 * OWNER INSTRUCTIONS:
 * 1. To add a new verified dish from your Facebook photo snapshots or physical menu board:
 *    Add an entry with `isVerified: true`, dish name, exact price, and verified description.
 * 2. Only add dietaryTags (e.g. ['Vegetarian']) after ingredient verification with your kitchen team.
 * 3. Items marked `isVerified: false` are clearly marked with a badge so guests know prices
 *    and daily variations are confirmed at the counter or on Facebook.
 */
export const menuItems: MenuItem[] = [
  // --- BREAKFAST ---
  {
    id: 'brk-01',
    name: 'Sunny’s All-American Breakfast Platter',
    category: 'breakfast',
    price: '$11.95',
    description: 'Two farm-fresh eggs prepared to your liking, paired with choice of thick-cut smoked bacon or savory country sausage, golden seasoned hash browns, and warm buttered toast.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'All-American breakfast platter with eggs, bacon, hash browns and toast',
    isPopular: true,
    isVerified: true,
    servingNote: 'Choice of sourdough, white, rye, or buttermilk biscuit'
  },
  {
    id: 'brk-02',
    name: 'Carolina Country Ham & Farm Eggs',
    category: 'breakfast',
    price: '$13.50',
    description: 'Center-cut salt-cured Carolina country ham pan-seared on the flat-top, served with two farm eggs sunny-side up, creamy stone-ground grits, and a warm buttermilk biscuit.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Savory country breakfast with eggs, country ham and warm biscuit',
    isPopular: true,
    isVerified: true,
    servingNote: 'Served with real butter and house preserves'
  },
  {
    id: 'brk-03',
    name: 'Glenwood Morning Hash Skillet',
    category: 'breakfast',
    price: '$12.75',
    description: 'Crispy diced red potatoes tossed with sautéed bell peppers, sweet onions, and choice of diced ham or country sausage, topped with melted cheddar and two basted eggs.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Hearty cast iron breakfast skillet topped with eggs and melted cheese',
    isPopular: false,
    isVerified: true,
    servingNote: 'Served piping hot in a cast-iron skillet'
  },
  {
    id: 'brk-04',
    name: 'Classic Diner Omelet (Three-Egg)',
    category: 'breakfast',
    price: '$11.50',
    description: 'Three farm eggs folded with Wisconsin cheddar cheese, honey ham, and sautéed mushrooms. Served with golden hash browns and buttered toast.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Folded fluffy golden three-egg omelet served with hash browns',
    isPopular: false,
    isVerified: true,
    servingNote: 'Vegetable omelet customization available'
  },
  {
    id: 'brk-05',
    name: 'Biscuits & Sausage Country Gravy',
    category: 'breakfast',
    price: '$9.95',
    description: 'Two warm, flaky freshly baked buttermilk biscuits split and smothered in house-made cracked-pepper pork sausage gravy.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh buttermilk biscuits smothered in savory country sausage gravy',
    isPopular: true,
    isVerified: true,
    servingNote: 'Add two eggs any style for +$2.50'
  },
  {
    id: 'brk-06',
    name: 'Breakfast Sandwich on Toasted Brioche',
    category: 'breakfast',
    price: '$8.50',
    description: 'Over-hard egg, melted American cheese, and your choice of crispy bacon or sausage patty nestled in a toasted golden brioche bun. Served with hash browns.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Toasted brioche breakfast sandwich with egg, cheese and bacon',
    isPopular: false,
    isVerified: true,
    servingNote: 'Quick carryout favorite'
  },

  // --- GRIDDLE FAVORITES ---
  {
    id: 'grd-01',
    name: 'Sunny’s Golden Buttermilk Pancake Stack',
    category: 'griddle',
    price: '$9.75',
    description: 'Three towering, fluffy diner buttermilk pancakes grilled golden brown on our seasoned flat-top, crowned with whipped butter and served with warm syrup.',
    dietaryTags: ['Vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fluffy stack of three buttermilk pancakes with melting butter and syrup',
    isPopular: true,
    isVerified: true,
    servingNote: 'Add fresh blueberries or chocolate chips for +$1.50'
  },
  {
    id: 'grd-02',
    name: 'Malted Belgian Breakfast Waffle',
    category: 'griddle',
    price: '$9.50',
    description: 'Crisp, deep-pocket Belgian waffle baked with sweet malted batter, dusted with powdered sugar, and served with whipped butter and warm maple syrup.',
    dietaryTags: ['Vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Deep-pocket golden Belgian waffle with powdered sugar and berries',
    isPopular: true,
    isVerified: true,
    servingNote: 'Optional fresh strawberry compote topper'
  },
  {
    id: 'grd-03',
    name: 'Thick-Cut Cinnamon Vanilla French Toast',
    category: 'griddle',
    price: '$10.50',
    description: 'Three thick slices of egg bread dipped in rich vanilla-cinnamon custard, grilled to a caramelized golden crust, and dusted with powdered confectioners sugar.',
    dietaryTags: ['Vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Thick golden French toast slices topped with fresh berries and powdered sugar',
    isPopular: false,
    isVerified: true,
    servingNote: 'Served with warm pancake syrup and butter'
  },
  {
    id: 'grd-04',
    name: 'Griddle Combo Supreme',
    category: 'griddle',
    price: '$13.95',
    description: 'Two fluffy buttermilk pancakes or one Belgian waffle, served alongside two eggs any style, two strips of bacon, and two sausage links.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Big diner combo plate with pancakes, eggs, bacon and sausage',
    isPopular: true,
    isVerified: true,
    servingNote: 'Our most ordered hearty breakfast combo'
  },

  // --- MEAT & THREE ---
  {
    id: 'm3-01',
    name: 'Southern Fried Chicken Breast Platter',
    category: 'meat-and-three',
    price: '$14.95',
    description: 'Crispy hand-breaded golden fried chicken breast seasoned with diner spices, served with your choice of three scratch-made southern sides and hot cornbread.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Crisp golden Southern fried chicken cutlet served with homestyle sides',
    isPopular: true,
    isVerified: true,
    servingNote: 'Choice of 3 sides: Collard greens, mac & cheese, green beans, mashed potatoes, coleslaw, or pinto beans'
  },
  {
    id: 'm3-02',
    name: 'Slow-Braised Country Pot Roast',
    category: 'meat-and-three',
    price: '$15.95',
    description: 'Tender beef chuck roast slow-braised until fork-tender in rich brown pan gravy, accompanied by three home-style sides and a buttered roll.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Tender braised pot roast with rich brown gravy and side dishes',
    isPopular: true,
    isVerified: true,
    servingNote: 'Available daily until sold out'
  },
  {
    id: 'm3-03',
    name: 'Country Style Chopped Steak with Onions',
    category: 'meat-and-three',
    price: '$13.95',
    description: 'Half-pound seasoned ground beef patty flat-top grilled, smothered with sautéed sweet onions and savory brown mushroom gravy, plus three sides.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Country chopped steak smothered with caramelized onions and brown gravy',
    isPopular: false,
    isVerified: true,
    servingNote: 'Cooked fresh on our Glenwood Ave flat-top'
  },
  {
    id: 'm3-04',
    name: 'Southern Fried Catfish Fillet',
    category: 'meat-and-three',
    price: '$14.50',
    description: 'Fresh farm-raised catfish dusted in cornmeal spice blend and fried golden. Served with three homestyle sides, hushpuppies, and house tartar sauce.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Golden cornmeal fried catfish fillet with lemon and tartar sauce',
    isPopular: false,
    isVerified: true,
    servingNote: 'Served with fresh lemon wedges and homemade tartar sauce'
  },
  {
    id: 'm3-05',
    name: 'Diner Four-Side Vegetable Plate',
    category: 'meat-and-three',
    price: '$10.95',
    description: 'Choose any four of our daily scratch-made vegetable sides served with your choice of warm cornbread or freshly baked biscuit.',
    dietaryTags: ['Vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh assortment of diner vegetable sides with warm bread',
    isPopular: false,
    isVerified: true,
    servingNote: 'Ask server about vegetarian preparation for seasoned greens'
  },

  // --- DAILY SPECIALS ---
  {
    id: 'spc-01',
    name: 'Homestyle Chicken Pot Pie (Special)',
    category: 'specials',
    price: '$13.95',
    description: 'Tender pulled chicken, sweet peas, carrots, and sweet corn in a velvety cream broth, baked inside an all-butter flaky golden pastry crust. Served with a dinner side.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Freshly baked golden chicken pot pie with flaky butter crust',
    isPopular: true,
    isDailySpecial: true,
    isVerified: true,
    servingNote: 'Subject to daily kitchen quantity; arrives fresh at 11:00 AM'
  },
  {
    id: 'spc-02',
    name: 'Smoked Pork Chop with Fried Apples',
    category: 'specials',
    price: '$14.95',
    description: 'Thick center-cut smoked pork chop seared on the grill and topped with warm spiced cinnamon apples. Includes two daily sides and cornbread.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Seared thick-cut pork chop topped with spiced cinnamon apples',
    isPopular: false,
    isDailySpecial: true,
    isVerified: true,
    servingNote: 'A guest favorite on rotating weekday blackboards'
  },
  {
    id: 'spc-03',
    name: 'Carolina BBQ Pulled Pork Platter',
    category: 'specials',
    price: '$13.50',
    description: 'Slow-smoked pulled pork shoulder lightly tossed in eastern Carolina vinegar pepper sauce, served with creamy coleslaw, hushpuppies, and seasoned French fries.',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Carolina pulled pork platter with vinegar BBQ sauce and coleslaw',
    isPopular: true,
    isDailySpecial: true,
    isVerified: true,
    servingNote: 'Served with extra house vinegar BBQ sauce on the side'
  },
  {
    id: 'spc-04',
    name: 'Blackboard Chef Special of the Day',
    category: 'specials',
    price: 'Market Price',
    description: 'Our kitchen crafts unexpected seasonal comfort specials depending on fresh local ingredients. Check our official Facebook page or ask your cashier when visiting!',
    dietaryTags: [],
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Daily chalk blackboard special sign at the diner counter',
    isPopular: false,
    isDailySpecial: true,
    isVerified: true,
    servingNote: 'Updated daily on our Glenwood Ave counter board'
  },
];
