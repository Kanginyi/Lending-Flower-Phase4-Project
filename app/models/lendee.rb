class Lendee < User
    has_many :contracts
    has_many :lenders, through: :contracts

    validates :name, presence: true
    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :credit_score, numericality: { greater_than_or_equal_to: 600 }
end
