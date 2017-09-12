class Character < ApplicationRecord
  include HTTParty
 base_uri 'https://ghibliapi.herokuapp.com/people'
  belongs_to :movie

end
