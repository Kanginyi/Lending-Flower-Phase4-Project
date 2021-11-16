class SessionsController < ApplicationController
    def click
        cookies[:click] ||= 0
        cookies[:click] = cookies[:click].to_i + 1
        session[:click] ||= 0
        session[:click] += 1
    end

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
end
