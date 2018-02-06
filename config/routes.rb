Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notebooks, only: [:index, :create, :show, :update, :destroy] do
      resources :notes, only: [:create]
      get '/:notebook_id/notes_by_notebook', to: 'notes#notes_by_notebook', on: :collection
    end

    resources :notes, only: [:index, :show, :update, :destroy]
  end
end
