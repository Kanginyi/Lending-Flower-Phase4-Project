# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_16_024451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contracts", force: :cascade do |t|
    t.integer "amount"
    t.text "description"
    t.text "collateral"
    t.integer "duration"
    t.bigint "lender_id", null: false
    t.bigint "lendee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lendee_id"], name: "index_contracts_on_lendee_id"
    t.index ["lender_id"], name: "index_contracts_on_lender_id"
  end

  create_table "lendees", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "credit_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lenders", force: :cascade do |t|
    t.string "name"
    t.float "interest_rate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "contracts", "lendees"
  add_foreign_key "contracts", "lenders"
end

# HEY ARE WE GONNA NEED PASSWORD FOR LENDEES SO THAT THEY CAN LOG IN???