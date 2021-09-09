class ApplicationController < ActionController::API
  include ActionController::Cookies

  def cookie_hash(user)
    { value: { id: user.id }, expires: 1.day, httponly: true }
  end
end
