class Contract < ApplicationRecord
  belongs_to :lender
  belongs_to :lendee
end
