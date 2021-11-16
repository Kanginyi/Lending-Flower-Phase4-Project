class Contract < ApplicationRecord
  belongs_to :lender
  belongs_to :lendee

  validates :amount, presence: true
  validates :collateral, presence: true
  validates :duration, numericality: { greater_than_or_equal_to: 30 }
end
