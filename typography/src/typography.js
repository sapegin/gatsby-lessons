import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography({
	...lincolnTheme,
	headerColor: 'salmon',
	overrideThemeStyles: () => ({
		a: {
			textShadow: null,
		},
	}),
})

export default typography
