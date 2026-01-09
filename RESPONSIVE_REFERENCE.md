# Quick Reference: Responsive Classes Used

## Mobile-First Pattern

Always start with mobile defaults, then add responsive modifiers for larger screens:

```jsx
// Mobile default
className="px-4 py-4"

// Add tablet+ version
className="px-4 py-4 md:px-8 md:py-6"

// Add desktop+ version
className="px-4 py-4 md:px-8 md:py-6 lg:px-10"
```

## Common Responsive Patterns in This Project

### 1. Margins and Padding

**Sidebar & Main Content:**
```jsx
// Sidebar always takes 256px (w-64) on desktop
// Main content has no left margin on mobile
className="md:ml-64"
```

**Horizontal Padding:**
```jsx
// Compact on mobile, generous on desktop
className="px-4 md:px-8"
```

**Vertical Padding:**
```jsx
// Smaller gaps on mobile, larger on desktop
className="py-4 md:py-6"
className="py-2 md:py-3"
```

### 2. Display & Visibility

**Responsive Display:**
```jsx
// Hide on mobile, show on tablet+
className="hidden md:block"

// Show on mobile, hide on tablet+
className="md:hidden"
```

**Responsive Direction:**
```jsx
// Stack vertically on mobile, horizontal on tablet+
className="flex flex-col md:flex-row"

// Start stacked, then 2 columns, then 3 columns
className="flex flex-col sm:flex-row"
```

### 3. Grid Layouts

**Statistics Cards:**
```jsx
// 1 column mobile → 2 columns small tablet → 3 columns desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
```

**Table:**
```jsx
// Full width with horizontal scroll when needed
className="overflow-x-auto"
<table className="w-full min-w-max">
```

### 4. Width & Sizing

**Input Fields:**
```jsx
// Full width on mobile, fixed width on tablet+
className="w-full sm:w-48"
className="w-full md:w-64"
```

**Icon Sizes:**
```jsx
// Smaller icons on mobile, larger on desktop
className="w-14 h-14 md:w-16 md:h-16"
```

### 5. Font Sizing

**Headings:**
```jsx
// Smaller on mobile, larger on desktop
className="text-xl md:text-2xl"
className="text-2xl md:text-3xl"
```

**Body Text:**
```jsx
className="text-xs md:text-sm"
className="text-sm md:text-base"
```

### 6. Gaps & Spacing

**Grid/Flex Gaps:**
```jsx
// Tighter on mobile, looser on desktop
className="gap-4 md:gap-6"
className="gap-1 md:gap-2"
```

## Tailwind Breakpoints Reference

| Screen | Min Width | Class Prefix | Usage |
|--------|-----------|--------------|-------|
| Mobile | 0px       | -            | Default, no prefix |
| Small  | 640px     | sm:          | Small tablets |
| Medium | 768px     | md:          | Tablets/iPad |
| Large  | 1024px    | lg:          | Desktops |
| XL     | 1280px    | xl:          | Large desktops |
| 2XL    | 1536px    | 2xl:         | Extra large screens |

## Real Examples from the Dashboard

### Example 1: Responsive Container
```jsx
<div className="md:ml-64 px-4 md:px-8 py-4 md:py-6">
  {/* Sidebar margin on tablet+, responsive padding all sizes */}
</div>
```

### Example 2: Responsive Form
```jsx
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
  <input className="w-full sm:w-48" />
  {/* Full width on mobile, fixed on tablet+ */}
</div>
```

### Example 3: Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* 1 col mobile, 2 col tablet, 3 col desktop */}
</div>
```

### Example 4: Responsive Table
```jsx
<div className="overflow-x-auto">
  <table className="w-full min-w-max">
    <td className="px-4 md:px-8 py-4">
      {/* Scroll on mobile, normal on desktop */}
    </td>
  </table>
</div>
```

### Example 5: Mobile Menu
```jsx
<aside className={`
  w-64 fixed left-0 top-0 
  transition-transform
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  md:translate-x-0
`}>
  {/* Slides in on mobile, always visible on tablet+ */}
</aside>
```

## Copy-Paste Templates

### Sidebar Layout
```jsx
<div className="md:ml-64">
  {/* Main content here */}
</div>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Items here */}
</div>
```

### Responsive Flex Row
```jsx
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  {/* Items here */}
</div>
```

### Responsive Padding
```jsx
className="px-4 md:px-8 py-4 md:py-6"
```

### Responsive Text
```jsx
className="text-lg md:text-xl lg:text-2xl"
```

## Tips & Best Practices

1. **Mobile First**: Always define mobile styles first, then add responsive modifiers
2. **Consistency**: Use the same spacing scale throughout (4, 6, 8, etc.)
3. **Touch Friendly**: Ensure buttons are at least 44px on mobile
4. **Testing**: Test at actual breakpoint widths (640, 768, 1024, etc.)
5. **Performance**: Avoid too many breakpoint changes (use 2-3 max per element)
6. **Readability**: Group responsive classes together by property

## Debugging Tips

### View Applied Classes
```jsx
// Add a border to see the element
className="border border-red-500"

// Check responsive behavior
className="border md:border-blue-500 lg:border-green-500"
```

### Check Breakpoints
```bash
# In browser console:
# Tailwind exposes breakpoints in production
// Shows current breakpoint
console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--tw-breakpoint'))
```

### Visual Testing
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Set device to specific viewport sizes
4. Check alignment and spacing at each breakpoint

---

**Happy responsive building! 🚀**
