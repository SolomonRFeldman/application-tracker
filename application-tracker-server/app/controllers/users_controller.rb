class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save 
      cookies.signed[:user] = cookie_hash(user)
      render( json: { user: user.session_info }, status: 200 )
    else
      render( json: { errors: user.errors }, status: 400 )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end