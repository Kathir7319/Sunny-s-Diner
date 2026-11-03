# Sunny's Diner — Raleigh, North Carolina
### Modern American Diner Website & Searchable Digital Menu

A modern, mobile-first, three-page restaurant website built for **Sunny's Diner** located at **8710 Glenwood Ave, Raleigh, NC 27617**.

---

## 🎨 Brand Identity & Design System

- **Diner Red (`#C83B32`)**: Primary booking, ordering, and important CTA buttons.
- **Midnight Navy (`#172B43`)**: Navigation, dark backgrounds, footer, and section headings.
- **Warm Cream (`#FFF4E3`)**: Main page backgrounds and menu surfaces.
- **Golden Yellow (`#F2B84B`)**: Small decorative accents, labels, and promotional highlights.
- **Charcoal (`#292929`)**: High-legibility body text and secondary content.
- **Pure White (`#FFFFFF`)**: Cards, menu panels, and clean content areas.

### Typography
- **Headings & Wordmarks**: `Oswald` (Google Fonts)
- **Badges & Small Labels**: `Barlow Condensed` (Google Fonts)
- **Body & Navigation**: `DM Sans` (Google Fonts)
- **Editorial Accents**: `Playfair Display` (Google Fonts)

---

## 🗺️ Website Architecture (Three Navigable Pages)

1. **Home (`/#/`)**
   - High-impact retro-modern American diner hero with classic breakfast spread.
   - Official welcome section celebrating Glenwood Avenue neighborhood hospitality.
   - 4 Featured category panels (Breakfast, Griddle Favorites, Meat & Three, Daily Specials).
   - "Why Visit Sunny's?" 3-part benefit overview (Classic Diner Favorites, Convenient Location, Easy Carryout).
   - Accurately positioned Google Maps location highlight (8710 Glenwood Ave, Raleigh, NC).
   - 4.5+ Star local breakfast reviews showcase ready for Google / Facebook sync.
   - Final CTA section: *"YOUR NEXT FAVORITE MEAL IS WAITING."*

2. **Digital Menu (`/#/menu`)**
   - Live, case-insensitive search bar filtering dishes in real-time.
   - Category navigation tabs (All, Breakfast, Griddle Favorites, Meat & Three, Daily Specials).
   - Dietary tags support (Vegetarian, Gluten-Free, Dairy-Free, Contains Nuts, Spicy).
   - Mandatory dietary & allergy disclaimer badge.
   - Callout for daily blackboard specials and Facebook photo snapshots.
   - Individual dish cards with appetizing photography, prices, descriptions, and carryout triggers.

3. **Carryout / Contact & Hours (`/#/carryout-contact`)**
   - Dedicated carryout guide explaining curbside and counter pickup.
   - Integration-ready ordering portal support (Square, Toast, ChowNow).
   - Prominent operating hours section with editable configuration and clear schedule updates.
   - Direct Google Maps directions link and interactive map embed.
   - Frequently Asked Questions for Glenwood Ave carryout customers.

---

## ⚙️ Restaurant Owner / Manager Guide

All restaurant data is cleanly separated from UI components:

### 1. Updating Menu Items & Prices
Edit `src/data/menuData.ts`. Add or modify dishes, prices, descriptions, and dietary labels:
```typescript
{
  id: 'brk-01',
  name: 'Sunny’s All-American Breakfast Platter',
  category: 'breakfast',
  price: '$11.95',
  description: 'Two farm-fresh eggs prepared to your liking...',
  dietaryTags: [],
  imageUrl: '...',
  isPopular: true,
  isVerified: true
}
```

### 2. Updating Operating Hours
Edit `src/data/hoursData.ts`. Set `isVerified: true` once official hours are finalized:
```typescript
export const hoursConfig: HoursConfig = {
  isVerified: true, // Switch to true when ready
  schedule: [
    { day: "Monday", open: "6:30 AM", close: "2:30 PM" },
    ...
  ]
};
```

### 3. Activating Online Carryout (Square / Toast / ChowNow)
Edit `src/data/siteConfig.ts`:
```typescript
ordering: {
  provider: 'Square', // 'Square' | 'Toast' | 'ChowNow' | 'Direct'
  isLive: true,       // Switch to true to activate direct link
  orderUrl: "https://your-square-or-toast-ordering-url.com",
}
```

---

## 🚀 Development & Build Commands

- `npm run dev`: Start local Vite development server
- `npm run build`: Typecheck with TypeScript and compile production bundle to `/dist`
- `npm run preview`: Preview the compiled production build locally
