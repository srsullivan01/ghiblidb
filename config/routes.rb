Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  root to: "api/movies#index"
  namespace :api do
    resources :comments
    resources :movies do
      resources :characters, only: [:index, :show]
      resources :comments 
    end
  end
end
