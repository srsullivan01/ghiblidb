class AddCommentsToMovies < ActiveRecord::Migration[5.1]
  def change
    add_reference :movies, :comment, foreign_key: true
  end
end
