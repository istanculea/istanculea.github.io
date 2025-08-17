import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: 'hsl(var(--surface))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'glow': 'var(--shadow-glow)',
				'tech': 'var(--shadow-tech)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			typography: {
				DEFAULT: {
					css: {
						// High contrast for readability
						color: 'hsl(var(--foreground))',
						strong: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
						},
						'h1, h2, h3, h4, h5, h6': {
							color: 'hsl(var(--foreground))',
						},
						p: {
							color: 'hsl(var(--foreground))',
						},
						li: {
							color: 'hsl(var(--foreground))',
						},
						'ul li': {
							color: 'hsl(var(--foreground))',
						},
						'ol li': {
							color: 'hsl(var(--foreground))',
						},
						code: {
							color: 'hsl(var(--foreground))',
							backgroundColor: 'hsl(var(--muted))',
							padding: '0.125rem 0.25rem',
							borderRadius: '0.25rem',
							fontWeight: '500',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
						pre: {
							backgroundColor: 'hsl(var(--muted))',
							color: 'hsl(var(--foreground))',
							border: '1px solid hsl(var(--border))',
						},
						'pre code': {
							backgroundColor: 'transparent',
							color: 'inherit',
						},
						blockquote: {
							color: 'hsl(var(--muted-foreground))',
							borderLeftColor: 'hsl(var(--border))',
						},
						'th, td': {
							borderColor: 'hsl(var(--border))',
						},
						th: {
							backgroundColor: 'hsl(var(--muted))',
							color: 'hsl(var(--foreground))',
						},
						td: {
							color: 'hsl(var(--foreground))',
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
