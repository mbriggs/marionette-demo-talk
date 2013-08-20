MarionetteTableExample::Application.routes.draw do
  resources :user, only: [:index]
  resources :order, only: [:index, :update, :create, :destroy]

  root 'home#demo'
end
