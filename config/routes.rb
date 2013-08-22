MarionetteTableExample::Application.routes.draw do
  resources :users, only: [:index]
  resources :orders, only: [:index, :update, :create, :destroy]

  root 'home#demo'
end
