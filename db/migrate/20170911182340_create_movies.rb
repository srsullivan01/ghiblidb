class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :director
      t.string :producer
      t.integer :release_date

      t.timestamps
    end
  end
end
