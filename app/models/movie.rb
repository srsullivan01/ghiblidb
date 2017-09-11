class Movie < ApplicationRecord
  has_many :characters, dependent: :destroy
end
