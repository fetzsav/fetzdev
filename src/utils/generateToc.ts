import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  subheadings: Array<TocItem>
}

function diveChildren(item: TocItem, depth: number): Array<TocItem> {
  if (!item || !item.subheadings) return []
  if (depth === 1 || item.subheadings.length === 0) {
    return item.subheadings
  } else {
    const last = item.subheadings[item.subheadings.length - 1] as TocItem
    return diveChildren(last, depth - 1)
  }
}

export function generateToc(headings: ReadonlyArray<MarkdownHeading> = []) {
  if (!Array.isArray(headings) || headings.length === 0) return []

  const bodyHeadings = headings.filter((h) => h && typeof h.depth === 'number' && h.depth > 1)
  const toc: Array<TocItem> = []

  for (const h of bodyHeadings) {
    const heading: TocItem = { ...h, subheadings: [] }

    if (heading.depth === 2) {
      toc.push(heading)
      continue
    }

    const lastItem = toc[toc.length - 1]
    if (!lastItem) continue
    if (heading.depth < lastItem.depth) continue

    const gap = heading.depth - lastItem.depth
    const target = diveChildren(lastItem, gap)
    target.push(heading)
  }

  return toc
}
