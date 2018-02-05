class AddColumnsToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :title, :string, null: false
    add_column :notes, :description, :string, null: false
    add_column :notes, :notebook_id, :integer, null: false
    add_index :notes, :notebook_id 
  end
end
