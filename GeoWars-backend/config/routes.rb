Rails.application.routes.draw do
  resources :scores
  resources :users

  get 'login', to: "users#login"
  post 'login', to: "users#verify"
  get 'logout', to: "users#logout"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
