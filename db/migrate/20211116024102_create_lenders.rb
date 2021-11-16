class CreateLenders < ActiveRecord::Migration[6.1]
  def change
    create_table :lenders do |t|
      t.string :name
      t.float :interest_rate

      t.timestamps
    end
  end
end
