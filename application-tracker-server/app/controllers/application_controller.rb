class ApplicationController < ActionController::API
  before_action :fetch_current_user_id

  include ActionController::Cookies

  private

  def fetch_current_user_id
    @current_user_id = cookies.signed[:user] ? cookies.signed[:user][:id] : nil
  end

  def cookie_hash(user)
    { value: { id: user.id }, expires: 1.day, httponly: true }
  end
end
