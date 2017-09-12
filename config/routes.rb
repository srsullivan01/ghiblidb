Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  root to: "movies#index"
  namespace :api do
    resources :movies do
      resources :characters, only: [:index, :show]
    end
  end
end
