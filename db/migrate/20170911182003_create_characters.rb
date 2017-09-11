class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.string :age
      t.string :eye_color
      t.string :hair_color
      t.string :films
      t.string :species
      t.string :url

      t.timestamps
    end
  end
end
