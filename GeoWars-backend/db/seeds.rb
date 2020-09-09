# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dan = User.create(username: "daniel", password: "daniel", password_confirmation: "daniel")
yehong = User.create(username: "yehong", password: "yehong", password_confirmation: "yehong")

score1 = Score.create(score:1000000, time_alive: 1000, accuracy: 100, user_id: yehong.id)
score1 = Score.create(score:500000, time_alive: 500, accuracy: 50, user_id: dan.id)