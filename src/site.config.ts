import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Global metadata used for <head> tags & OG generation
	author: 'Fetzer Noah',
	title: 'Fetz.Dev',
	description: 'Personal portfolio and technical blog — Rust, Linux, homelab, and full-stack engineering.',
	lang: 'en-US',
	ogLocale: 'en_US',

	// Date format used by <PostDate> and utilities
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

// ======= Navigation Links =======
export const menuLinks: Array<{ title: string; path: string }> = [
	{ title: 'Home', path: '/' },
	{ title: 'Blog', path: '/blog/' },
	{ title: 'Dice Generator', path: '/dice/' },
	{ title: 'Projects', path: '/#projects' }
]

// ======= Expressive Code Options =======
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// Light/dark syntax themes
	themes: ['dracula', 'github-light'],

	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme)
				return `[data-theme='${theme.type}']`
		}
		return `[data-theme="${theme.name}"]`
	},

	useThemedScrollbars: false,

	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '6px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
	}
}
