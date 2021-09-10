class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def cookie_hash(user)
    { value: { id: user.id }, expires: 1.day, httponly: true }
  end
end
