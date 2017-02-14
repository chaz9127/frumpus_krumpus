class CreateComics < ActiveRecord::Migration[5.0]
  def change
    create_table :comics do |t|
      t.string :title
      t.integer :comic_number, null: false
      t.attachment :image, null: false

      t.timestamps
    end
  end
end
