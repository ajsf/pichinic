import products from '../products/productCategories'

export const mapStateToCheckoutReadiness = (state, currentCategory) => {
  const started = state.location || state.food || state.drink
  const ready = state.location && state.food && state.drink
  let continueButtonText = 'Get Started'
  if (ready) {
    continueButtonText = 'Checkout'
  } else if (started) {
    continueButtonText = 'Continue'
  }

  let nextLink =
    currentCategory && currentCategory === products.LOCATIONS
      ? '/food'
      : '/locations'
  if (ready) {
    nextLink = '/cart'
  } else if (started) {
    if (state.location && state.food) {
      if (currentCategory && currentCategory === products.DRINKS) {
        nextLink = '/cart'
      } else {
        nextLink = '/drink'
      }
    } else if (state.location && state.drink) {
      if (currentCategory && currentCategory === products.FOOD) {
        nextLink = '/cart'
      } else {
        nextLink = '/drink'
      }
    } else if (state.drink && state.food) {
      if (currentCategory && currentCategory === products.LOCATIONS) {
        nextLink = '/cart'
      } else {
        nextLink = '/locations'
      }
    } else if (state.location) {
      if (currentCategory && currentCategory === products.FOOD) {
        nextLink = '/drink'
      } else {
        nextLink = '/food'
      }
    } else if (state.food) {
      if (currentCategory && currentCategory === products.LOCATIONS) {
        nextLink = '/drink'
      }
    }
  }
  return {
    continueButtonText,
    nextLink,
  }
}
