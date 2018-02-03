class Notebook < ApplicationRecord
  validates :title, null: false
  validates :title, uniqueness: { scope: :user_id }

  # ADD associations
  belongs_to :user

end
