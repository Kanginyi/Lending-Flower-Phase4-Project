class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.integer :amount
      t.text :description
      t.text :collateral
      t.integer :duration
      t.belongs_to :lender, null: false, foreign_key: true
      t.belongs_to :lendee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
