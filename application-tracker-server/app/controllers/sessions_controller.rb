class SessionsController < ApplicationController

  def create
    if user = User.authenticate(email: session_params[:email], password: session_params[:password])
      cookies.signed[:user] = cookie_hash(user)
      render json: user.session_info
    else
      render json: { errors: [{ title: 'Invalid email or password' }] }, status: 401
    end
  end

  def destroy
    cookies.delete(:user)
    render status: 200
  end

  def show
    user = cookies.signed[:user] && User.find(cookies.signed[:user][:id])
    user ? 
      render(json: { user: user.session_info }) :
      render(json: { authentication_error: true }, status: 400)
  end

  private
  
  def session_params
    params.require(:user).permit(:email, :password)
  end

end