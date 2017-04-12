Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/about', to: 'about#index'
  get '/archive', to: 'archive#index'
  get '/comics/:id', to: 'comics#show'
  get '/comics', to: 'home#index'

  namespace :api do
    namespace :web do
      resources :comics, only: [:index, :show]
    end
  end
end
