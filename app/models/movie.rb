class Movie < ApplicationRecord
  has_many :characters, dependent: :destroy
  has_many :comments, dependent: :destroy
  include HTTParty
  base_uri 'https://ghibliapi.herokuapp.com/films'


  def self.generate(id)
    movie = find_by api_id: api_id
    return movie unless movie.nil?

    response = get "/#{api_id}"

    create!(title: response['title'],
    description:response['description'],
    director: response['director'],
    producer: response['producer'],
    release_date: response['release_date'],
    api_id: api_id)
  end
end
