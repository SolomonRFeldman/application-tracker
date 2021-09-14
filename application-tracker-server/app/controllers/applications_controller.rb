class ApplicationsController < ApplicationController

  def index
    if @current_user_id == params[:user_id].to_i
      render(json: Application.all.where({user_id: params[:user_id]}), status: 200 )
    end
  end

  def create
    if @current_user_id == params[:user_id].to_i
      application = Application.new(application_params.merge({user_id: params[:user_id]}))
      application.save ? render(json: application.to_json, status: 200) : render(json: { errors: application.errors }, status: 400)
    end
  end
  
  private

  def application_params
    params.require(:application).permit(:organization_name, :purpose, :url, :date_applied)
  end
end