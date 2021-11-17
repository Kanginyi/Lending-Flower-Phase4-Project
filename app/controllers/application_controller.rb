class ApplicationController < ActionController::API
  include ActionController::Cookies

  include ActionController::Helpers

  helper_method :current_user, :logged_in? # Is this person logged in or not? Checks if there's a session_token active right now

  private

  def current_user
    return nil unless session[:session_token] # Return nil unless this session thing is found
    @current_user ||= User.find_by(session_token: session[:session_token]) # We only really need this if you're logging in; if you're already logged in, then we don't need to run this because @current_user will already exist
  end

  def logged_in?
    !!current_user # Don't forget that the double bang operator returns a boolean value, if this returns true, someone's logged in; if not, then they're not!
  end

  def login!(user) # You're logging in
    user.reset_session_token! # Your session token gets reset to a new one
    session[:session_token] = user.session_token # You get assigned your new session_token
    @current_user = user # Your login credentials get set to @current_user
  end

  def logout! # You're logging out
    current_user.reset_session_token! # Your session_token gets reset to a new one
    session[:session_token] = nil # Your session_token gets set to nil, essentially gets "erased"
    @current_user = nil # Now there will be no more @current_user, because you logged out dumbass
  end

  def require_logged_in
    unless current_user # If current_user is nil or false, we will run this error
      render json: { base: ['invalid credentials'] }, status: :unauthorized # This is say your shit is unauthorized, get the hell outta here|401 as a status code is "Unauthorized"
    end
  end
end
