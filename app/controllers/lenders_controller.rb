class LendersController < ApplicationController
    def index
        lenders = Lender.all
        render json: lenders, status: :ok
    end
    
    def show
        lender = Lender.find_by(id: params[:id])
        if lender
            render json: lender, status: :ok
        else
            render json: {error: "Lender not found"}, status: :not_found
        end
    end
    
    def destroy
        lender = Lender.find_by(id: params[:id])
        if lender
            lender.destroy
            render json: {message: "Lender successfully deleted"}, status: :no_content            
        else
            render json: {error: "Lender not found"}, status: :not_found 
        end
    end

    def create
        new_lender = Lender.create(lender_params)
        if new_lender.valid?
            render json: new_lender, status: :created
        else
            render json: {errors: new_lender.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        lender = Lender.find_by(id: params[:id])
        lender.update(lender_params)
        if lender.valid?
            render json: lender, status: :ok
        else
            render json: {errors: lender.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    private
    
    def lender_params
        params.permit(:name, :interest_rate)
    end
end
