class CreateNotebooks < ActiveRecord::Migration[5.1]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :notebooks, :user_id
    add_index :notebooks, [:title, :user_id], unique: true
  end
end
