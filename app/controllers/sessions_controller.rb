class SessionsController < ApplicationController

    def create
      user = User.find_by(username: params[:username])
      session[:user_id] = user.id
      render json: user
    end

    def destroy
      user = current_user
      if user
        logout!
        render json: {message: "Lata bitch"}, status: :no_content
      else
        render json: ["You done goofed"], status: 404
      end
    end
end
