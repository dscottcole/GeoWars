# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dan = User.create(username: "daniel", password: "daniel", password_confirmation: "daniel")
yehong = User.create(username: "yehong", password: "yehong", password_confirmation: "yehong")
jaz = User.create(username: "jazzy", password: "kittycat", password_confirmation: "kittycat")
mello = User.create(username: "mello", password: "puppydog", password_confirmation: "puppydog")

score1 = Score.create(score:99, time_alive: 65.205, accuracy: 25.50, user_id: yehong.id)
score2 = Score.create(score:75, time_alive: 52.107, accuracy: 20.20, user_id: dan.id)
score3 = Score.create(score:65, time_alive: 40.300, accuracy: 15.25, user_id: jaz.id)
score4 = Score.create(score:90, time_alive: 65.705, accuracy: 20.20, user_id: mello.id)
score5 = Score.create(score:135, time_alive: 80.500, accuracy: 20.50, user_id: yehong.id)
score6 = Score.create(score:115, time_alive: 70.659, accuracy: 17.10, user_id: dan.id)
score7 = Score.create(score:30, time_alive: 20.010, accuracy: 50.25, user_id: jaz.id)
score8 = Score.create(score:80, time_alive: 59.475, accuracy: 20.20, user_id: mello.id)
score9 = Score.create(score:10, time_alive: 10.300, accuracy: 50.25, user_id: jaz.id)
score10 = Score.create(score:5, time_alive: 6.100, accuracy: 50.50, user_id: dan.id)