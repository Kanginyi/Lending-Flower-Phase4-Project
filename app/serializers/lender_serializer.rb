class LenderSerializer < ActiveModel::Serializer
  attributes :id, :name, :interest_rate

  has_many :lendees
end
