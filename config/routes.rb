Rails.application.routes.draw do
  
  resources :contracts
  resources :lendees
  resources :lenders

  get "/cookie_click", to: "sessions#click"

  # # Login session
  # post "/login", to: "sessions#create"
  # # Login action
  # get "/me", to: "users#show"




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# index, create, show, update, destroy
# lenders/lendees

# Contracts: show all contracts (index), show individual contracts (show), create new contracts (create), update existing contracts (update), delete contracts (destroy)
# Lenders: show all lenders (index), show individual (shows)
# Lendees: show your own information/contracts (show), create 

# input form with dropdown menu, choose from whichever lender you want, hit the submit button and that contract card gets created onto the contract container