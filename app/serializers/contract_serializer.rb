class ContractSerializer < ActiveModel::Serializer
  attributes :id, :amount, :description, :collateral, :duration
  has_one :lender
  has_one :lendee
end
