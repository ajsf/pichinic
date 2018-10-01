import { mapStateToCheckoutReadiness } from './utils'

const state = {}

describe('state utils', () => {
  describe('mapStateToCheckoutReadiness', () => {
    describe('nextLink', () => {
      it('defaults to location', () => {
        const props = mapStateToCheckoutReadiness(state)
        expect(props.nextLink).toBe('/locations')
      })
      it('defaults to food when the current page is Location', () => {
        const props = mapStateToCheckoutReadiness(state, 'Location')
        expect(props.nextLink).toBe('/food')
      })
    })
  })
})
