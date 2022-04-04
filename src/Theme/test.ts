import theme from './index'

// Note that if the design token changes a used value, the snapshot will need to be updated
it('Produces correct output', () => {
  expect(theme).toMatchSnapshot()
})
