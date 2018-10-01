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
    currentCategory && currentCategory === 'Location' ? '/food' : '/locations'
  if (ready) {
    nextLink = '/cart'
  } else if (started) {
    if (state.location && state.food) {
      if (currentCategory && currentCategory === 'Beverage') {
        nextLink = '/cart'
      } else {
        nextLink = '/drink'
      }
    } else if (state.location && state.drink) {
      if (currentCategory && currentCategory === 'Menu') {
        nextLink = '/cart'
      } else {
        nextLink = '/drink'
      }
    } else if (state.drink && state.food) {
      if (currentCategory && currentCategory === 'Location') {
        nextLink = '/cart'
      } else {
        nextLink = '/locations'
      }
    } else if (state.location) {
      if (currentCategory && currentCategory === 'Menu') {
        nextLink = '/drink'
      } else {
        nextLink = '/food'
      }
    } else if (state.food) {
      if (currentCategory && currentCategory === 'Location') {
        nextLink = '/drink'
      }
    }
  }
  return {
    continueButtonText,
    nextLink,
  }
}
