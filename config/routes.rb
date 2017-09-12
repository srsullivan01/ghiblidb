Rails.application.routes.draw do
  resources :comments
  devise_for :users
  root to: "movies#index"
  namespace :api do
    resources :movies do
      resources :characters, only: [:index, :show]
    end
  end
end
