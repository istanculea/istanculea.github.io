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
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'inherit',
						a: {
							color: 'hsl(var(--primary))',
							'&:hover': {
								color: 'hsl(var(--primary-dark))',
							},
						},
						strong: {
							color: 'inherit',
							fontWeight: '600',
						},
						h1: {
							color: 'inherit',
							fontWeight: '700',
							lineHeight: '1.2',
						},
						h2: {
							color: 'inherit',
							fontWeight: '700',
							lineHeight: '1.3',
							marginTop: '2em',
							marginBottom: '1em',
						},
						h3: {
							color: 'inherit',
							fontWeight: '600',
							lineHeight: '1.4',
							marginTop: '1.6em',
							marginBottom: '0.8em',
						},
						p: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
							lineHeight: '1.8',
						},
						ul: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
						},
						li: {
							marginTop: '0.75em',
							marginBottom: '0.75em',
						},
						'ul > li': {
							paddingLeft: '0.5em',
						},
						code: {
							color: 'inherit',
							backgroundColor: 'hsl(var(--muted))',
							padding: '0.2em 0.4em',
							borderRadius: '0.25rem',
							fontWeight: '500',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
					},
				},
				lg: {
					css: {
						fontSize: '1.125rem',
						lineHeight: '1.8',
						p: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
							lineHeight: '1.9',
						},
						h2: {
							fontSize: '1.75em',
							marginTop: '2em',
							marginBottom: '1em',
						},
						h3: {
							fontSize: '1.375em',
							marginTop: '1.6em',
							marginBottom: '0.8em',
						},
						li: {
							marginTop: '0.75em',
							marginBottom: '0.75em',
						},
					},
				},
				xl: {
					css: {
						fontSize: '1.25rem',
						lineHeight: '1.9',
						p: {
							marginTop: '1.6em',
							marginBottom: '1.6em',
							lineHeight: '2',
						},
						h2: {
							fontSize: '2em',
							marginTop: '2.2em',
							marginBottom: '1em',
						},
						h3: {
							fontSize: '1.5em',
							marginTop: '1.8em',
							marginBottom: '0.9em',
						},
						li: {
							marginTop: '0.8em',
							marginBottom: '0.8em',
						},
					},
				},
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
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
