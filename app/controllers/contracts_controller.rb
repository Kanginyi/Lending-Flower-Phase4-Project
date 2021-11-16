class ContractsController < ApplicationController
    def index
        contracts = Contract.all
        render json: contracts, status: :ok
    end
    
    def show
        contract = Contract.find_by(id: params[:id])
        if contract
            render json: contract, status: :ok
        else
            render json: {error: "Contract not found"}, status: :not_found
        end
    end
    
    def destroy
        contract = Contract.find_by(id: params[:id])
        if contract
            contract.destroy
            render json: {message: "Contract successfully destroyed"}, status: :no_content            
        else
            render json: {error: "Contract not found"}, status: :not_found 
        end
    end

    def create
        new_contract = Contract.create(contract_params)
        if new_contract.valid?
            render json: new_contract, status: :created
        else
            render json: {errors: new_contract.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        contract = Contract.find_by(id: params[:id])
        contract.update(contract_params)
        if contract.valid?
            render json: contract, status: :ok
        else
            render json: {errors: contract.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    private
    
    def contract_params
        params.permit(:amount, :description, :collateral, :duration, :lender_id, :lendee_id)
    end
end

#show index create update destroy