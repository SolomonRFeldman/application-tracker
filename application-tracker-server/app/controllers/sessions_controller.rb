class SessionsController < ApplicationController

  def create
    cookies.signed[:user] = { value: { name: params[:user][:email] }, expires: 1.day, httponly: true }
    # cookies.delete :user
    puts cookies.signed[:user]
    render json: { user: cookies.signed[:user] }
  end

  def destroy
    puts cookies.delete(:user)
    render status: 200
  end

  def show
    render json: { user: cookies.signed[:user] }
  end

end