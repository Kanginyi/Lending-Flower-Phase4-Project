class Lender < User
    has_many :contracts
    has_many :lendees, through: :contracts

    validates :interest_rate, numericality: { less_than_or_equal_to: 30, message: "This is usury >:(" }
end
