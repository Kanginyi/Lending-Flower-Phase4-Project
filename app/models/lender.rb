class Lender < ApplicationRecord
    has_many :contracts
    has_many :lendees, through: :contracts
end
