Rails.application.routes.draw do
  scope :api do
    post '/signup' => 'users#create'
    post '/signin' => 'sessions#create'
    delete '/signout' => 'sessions#destroy'
    get '/current' => 'sessions#show'

    resources :users, only: [] do
      resources :applications, only: [:create]
    end
  end
end
