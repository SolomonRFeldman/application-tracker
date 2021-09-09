Rails.application.routes.draw do
  scope :api do
    post '/signin' => 'sessions#create'
    delete '/signout' => 'sessions#destroy'
    get '/current' => 'sessions#show'
  end
end
