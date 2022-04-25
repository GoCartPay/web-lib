// import React from 'react'
// import { theme } from '../index'
// import Typography from '@mui/material/Typography'
// import { Variant } from '@mui/material/styles/createTypography'
// import { TypographyUnit } from '../types'
// import { Theme } from '@mui/material'

// /** Default sort */
// const sortingArr = [
//   'h1',
//   'h2',
//   'h3',
//   'h4',
//   'h5',
//   'h6',
//   'title',
//   'subtitle1',
//   'subtitle2',
//   'body1',
//   'body2'
// ].reverse()

// /** Keys of `theme.palette` that are constants or functions, not color objects */
// const nonTypography = [
//   'fontFamily',
//   'fontSize',
//   'fontWeightBold',
//   'fontWeightLight',
//   'fontWeightMedium',
//   'fontWeightRegular',
//   'htmlFontSize',
//   'pxToRem'
// ]

// /** "Sorted" object of typography variants */
// const typo: { [idx: string]: TypographyUnit } = Object.keys(theme.typography)
//   .sort((a, b) => sortingArr.indexOf(b) - sortingArr.indexOf(a))
//   .reduce(
//     (acc, cur: keyof Theme['typography']) => ({
//       ...acc,
//       ...(nonTypography.includes(cur) ? null : { [cur]: theme.typography[cur] })
//     }),
//     {}
//   )

// /** Main compinent that loops through typography variants */
// const TypographyDisplay = () => {
//   return (
//     <ul>
//       {Object.keys(typo).map((t: Variant) => {
//         return (
//           <div key={t}>
//             <Typography variant={t} gutterBottom>
//               {'Pack my box with five dozen liquor jugs'}
//             </Typography>
//             <span>{`theme.typography.${t}`}</span>
//           </div>
//         )
//       })}
//     </ul>
//   )
// }

// export default {
//   title: 'Spruce/Theme/Typography',
//   component: TypographyDisplay
// }

// const Template = () => <TypographyDisplay />

// export const Default = Template.bind({})
// Default.args = {}
