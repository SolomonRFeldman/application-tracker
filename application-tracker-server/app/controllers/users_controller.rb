class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    return render(json: { errors: user.errors }, status: 400) unless user.save

    cookies.signed[:user] = cookie_hash(user)
    render(json: user.session_info, status: 200)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end