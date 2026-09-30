import { useId } from 'react';

// React's useId() can contain characters (like ":" or "«") that break
// SVG url(#id) references, so strip them out. Each component instance
// gets its own id, which keeps gradients/masks from clashing.
export default function useSvgId(prefix) {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}
