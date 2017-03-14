class AddSlugToComics < ActiveRecord::Migration[5.0]
  def change
    add_column :comics, :slug, :string
  end
end
