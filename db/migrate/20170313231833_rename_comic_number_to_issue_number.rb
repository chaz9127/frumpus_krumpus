class RenameComicNumberToIssueNumber < ActiveRecord::Migration[5.0]
  def change
    rename_column :comics, :comic_number, :issue_number
  end
end
