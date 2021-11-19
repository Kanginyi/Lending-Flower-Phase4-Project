Rails.application.routes.draw do
  
  resources :contracts
  resources :lendees
  resources :lenders

  # Login Session, Create is the login action, Destroy is the logout action
  # resources :sessions, only: [:create, :destroy]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Users actions
  resources :users
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