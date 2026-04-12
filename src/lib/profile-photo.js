import { site } from "@/data/portfolio"

/** Vite `public/` files must respect `base` (e.g. GitHub Pages subpath). */
export function resolvePublicUrl(path) {
  if (!path || /^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith("/") ? path.slice(1) : path
  const base = import.meta.env.BASE_URL || "/"
  if (base === "/") return `/${normalized}`
  const prefix = base.endsWith("/") ? base : `${base}/`
  return `${prefix}${normalized}`
}

/** Ordered URLs for the profile image (primary + fallbacks). */
export function getProfilePhotoCandidates() {
  const trimmed = (site.profilePhotoSrc ?? "").trim()
  const primary = trimmed || "/assets/profile.jpg"
  const extras = site.profilePhotoFallbacks ?? []
  const seen = new Set()
  const out = []
  for (const p of [primary, ...extras]) {
    const url = resolvePublicUrl(p)
    if (url && !seen.has(url)) {
      seen.add(url)
      out.push(url)
    }
  }
  return out.length > 0 ? out : [resolvePublicUrl("/assets/profile.jpg")]
}

export function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}
