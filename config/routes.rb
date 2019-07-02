Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :followers do |r|
    collection do
      get 'random'
    end
  end

  resources :tweets
  # get 'profile/index'
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  root 'home#index'
  get '*path', to: 'home#index' # redirect all requests to single page, react router intercepts from there.

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
