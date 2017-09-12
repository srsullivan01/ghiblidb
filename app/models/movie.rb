class Movie < ApplicationRecord
  include HTTParty
 base_uri 'https://ghibliapi.herokuapp.com/films'
  has_many :character, dependent: :destroy
end
