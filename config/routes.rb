Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notebooks, only: [:index, :create, :show, :update, :destroy] do
      resources :notes, only: [:index, :create]
    end

    resources :notes, only: [:show, :update, :destroy]
  end
end
