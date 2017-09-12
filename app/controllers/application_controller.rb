class ApplicationController < ActionController::API
before_action :authenticate_user!
include CanCan::ControllerAdditions

rescue_from CanCan::AccessDenied do |exception|
   flash[:notice] = "Access denied!"
   flash.keep(:notice)
   redirect_to root_url
 end
end
