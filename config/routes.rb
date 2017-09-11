Rails.application.routes.draw do
  namespace :api do
    resources :movies do
      resources :characters, only: [:index, :show]
    end
  end
end
