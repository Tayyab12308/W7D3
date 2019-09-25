# json.extract! @guest, :name, :age, :favorite_color

json.name @guest.name
json.age @guest.age
json.favorite_color @guest.favorite_color
# avoid using on index page b/c too much info
json.gifts @guest.gifts 
# json.extract! @guest, :gift_ids  // this is the right way to normalize data



#  json.partial! 'guest', guest: @guest