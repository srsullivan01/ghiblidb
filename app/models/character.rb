class Character < ApplicationRecord
  include HTTParty
 base_uri 'https://ghibliapi.herokuapp.com/people'
  belongs_to :movie

  def self.generate(api_id)
    movie = find_by api_id: api_id
    return movie unless movie.nil?

    response = get "/#{api_id}"

    create!(name: response['name'],
    image:
    gender:response['gender'],
    age: response['age'],
    eye_color: response['eye_color'],
    hair_color: response['hair_color'],
    species: response['species'],
    films: response['films']
    api_id: api_id )
  end

end
