class Movie < ApplicationRecord
  include HTTParty
 base_uri 'https://ghibliapi.herokuapp.com/films'
  has_many :character, dependent: :destroy

  def self.generate(api_id)
    movie = find_by api_id: api_id
    return movie unless movie.nil?

    response = get "/#{api_id}"

    create!(title: response['title'],
    image:
    description:response['description'],
    director: response['director'],
    producer: response['producer'],
    release_date: response['release_date'],
    api_id: api_id)
  end
end
