# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seedings Lenders 💰"

jpmorgan = Lender.create(name: "JPMorgan Pursue", interest_rate: 5.0)
canadia = Lender.create(name: "Bank of Canadia", interest_rate: 3.8)
capital_two = Lender.create(name: "Capital Two", interest_rate: 4.1)
wells_closecome = Lender.create(name: "Wells Closecome", interest_rate: 52.9)
silverman = Lender.create(name: "Silverman Sucks", interest_rate: 3.1)
tt_bank = Lender.create(name: "TT Bank", interest_rate: 3.6)

puts "Seeding Lendees 😎"
levin = Lendee.create(name: "Levin Kutz", age: 35, credit_score: rand(600..800))
shmeric = Lendee.create(name: "Shmeric Shmee", age: 26, credit_score: rand(600..800))
alan = Lendee.create(name: "Alan Cinsavich", age: 32, credit_score: rand(600..800))
xinyi = Lendee.create(name: "ZjhinYeeeeeeee Yowzers", age: 24, credit_score: rand(600..800))
samonella = Lendee.create(name: "Samonella Toxic", age: 24, credit_score: rand(600..800))
kwon = Lendee.create(name: "Kwon DoNot", age: 26, credit_score: rand(600..800))
dilshan = Lendee.create(name: "Dilshan Mendes", age: 26, credit_score: rand(600..800))
barley = Lendee.create(name: "Barley Berald Bearminck", age: 28, credit_score: rand(600..800))
paul = Lendee.create(name: "Paul Daviddaughter", age: 39, credit_score: rand(600..800))
cooke = Lendee.create(name: "Sekneeyup Cooking", age: 26, credit_score: rand(600..800))
omar = Lendee.create(name: "Ramo Possums", age: 19, credit_score: rand(600..800))


puts "Seeding Contracts 📃"
Contract.create([
    {
        amount: 10000,
        description: "Student Loans",
        collateral: "Your brain",
        duration: 240,
        lender_id: jpmorgan.id,
        lendee_id: levin.id
    },
    {
        amount: 15000,
        description: "Auto Loans",
        collateral: "Your Lambo",
        duration: 90,
        lender_id: canadia.id,
        lendee_id: shmeric.id
    },
    {
        amount: 50000,
        description: "Mortgage Loans",
        collateral: "Your house",
        duration: 150,
        lender_id: capital_two.id,
        lendee_id: alan.id
    },
    {
        amount: 30000,
        description: "Personal Loan for Home Renovations",
        collateral: "Your dog",
        duration: 175,
        lender_id: wells_closecome.id,
        lendee_id: xinyi.id
    },
    {
        amount: 70000,
        description: "Student Loans",
        collateral: "Your ankles",
        duration: 200,
        lender_id: silverman.id,
        lendee_id: samonella.id
    },
    {
        amount: 80000000,
        description: "Wants to colonize Mars",
        collateral: "Your spaceship",
        duration: 600,
        lender_id: tt_bank.id,
        lendee_id: kwon.id
    },
    {
        amount: 6000,
        description: "Mining Rig",
        collateral: "Your rubies",
        duration: 60,
        lender_id: jpmorgan.id,
        lendee_id: dilshan.id
    },
    {
        amount: 12000,
        description: "A lot of dog treats",
        collateral: "Your dogs",
        duration: 100,
        lender_id: canadia.id,
        lendee_id: barley.id
    },
    {
        amount: 7000,
        description: "Diapers galore",
        collateral: "Your beard",
        duration: 50,
        lender_id: capital_two.id,
        lendee_id: paul.id
    },
    {
        amount: 10000,
        description: "Wants to buy Twice merch",
        collateral: "All your Loona merch",
        duration: 120,
        lender_id: silverman.id,
        lendee_id: cooke.id
    },
    {
        amount: 696969,
        description: "Possums",
        collateral: "Possums",
        duration: 69,
        lender_id: tt_bank.id,
        lendee_id: omar.id
    },
])

puts "Done seeding! ✅✅✅"
