class Lendee < ApplicationRecord
    has_many :contracts
    has_many :lenders, through: :contracts
end
