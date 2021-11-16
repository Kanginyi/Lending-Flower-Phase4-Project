class LendeesController < ApplicationController
    def index
        lendees = Lendee.all
        render json: lendees, status: :ok
    end
    
    def show
        lendee = Lendee.find_by(id: params[:id])
        if lendee
            render json: lendee, status: :ok
        else
            render json: {error: "Lendee not found"}, status: :not_found
        end
    end
    
    def destroy
        lendee = Lendee.find_by(id: params[:id])
        if lendee
            lendee.destroy
            render json: {message: "Lendee successfully destroyed"}, status: :no_content            
        else
            render json: {error: "Lendee not found"}, status: :not_found 
        end
    end

    def create
        new_lendee = Lendee.create(lendee_params)
        if new_lendee.valid?
            render json: new_lendee, status: :created
        else
            render json: {errors: new_lendee.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        lendee = Lendee.find_by(id: params[:id])
        lendee.update(lendee_params)
        if lendee.valid?
            render json: lendee, status: :ok
        else
            render json: {errors: lendee.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    private
    
    def lendee_params
        params.permit(:name, :age, :credit_score)
    end
end
