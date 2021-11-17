class CreateLendees < ActiveRecord::Migration[6.1]
  def change
    create_table :lendees do |t|
      t.string :name
      t.integer :age
      t.integer :credit_score
      t.integer :user_id

      t.timestamps
    end
  end
end
